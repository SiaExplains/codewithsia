const config = require('config');
const express = require('express');
const _ = require('lodash');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');

require('./utils/prototypes');
const {
    handleUserValidate,
    handleMessage,
    handleException
} = require('./utils/dry');

const { authenticate } = require('./middleware/authenticate');
const { User } = require('./model/user');
const { Logger, logmid } = require('./utils/logger');

// -------------------- configuration and initilizations
let logmog = new Logger(true);
logmog.cfline('#', 50);
logmog.cflog('Reading configuraions');
logmog.cfline('+-+', 30);
logmog.cflog(`Level : ${config.get('Level')}`);
logmog.cflog(`DB : ${config.get('MONGOURI')}`);
logmog.cflog(`PORT : ${config.get('PORT')}`);
logmog.cfline('+-+', 30);
let app = express();
const requestLogger = fs.createWriteStream(
    path.join(__dirname, 'log/requests.log')
);

// ---------------------------- middle-wares

app.use(express.json());
app.use(helmet());
app.use(morgan('combined', { stream: requestLogger }));
app.use(logmid('low'));

//---------------------------- user routes

// list of all users
app.get('/api/users', (req, res) => {
    User.find({}).then(users => {
        res.send(users);
    });
});

// Saving User
app.post('/api/user', async (req, res) => {
    try {
        const body = _.pick(req.body, ['fullName', 'email', 'password']);
        let user = new User(body);
        await user.save();
        handleMessage(res, 'User has been saved.');
        return res.status(200).send(user);
    } catch (err) {
        handleException(res, err);
    }
});

// login
app.post('/api/login', async (req, res) => {
    try {
        const body = _.pick(req.body, ['email', 'password']);
        let user = await User.findCredentials(body.email, body.password);
        let token = await user.generateAuthToken();
        res.header('x-auth', token)
            .status(200)
            .send(token);
    } catch (err) {
        res.status(400).json({
            Error: `something went wrong ${err}`
        });
    }
});

app.delete('/api/logout', authenticate, async (req, res) => {
    try {
        await req.user.removeToken(req.token);
        return res.status(200).json({ Message: 'Logout successfull.' });
    } catch (error) {
        return res.status(500).json({ Error: `Something went wrong ${error}` });
    }
});
//--------------------- payment routes

// Add new payment
app.post('/api/payment', authenticate, async (req, res) => {
    try {
        const body = _.pick(req.body, ['info', 'amount']);
        let user = await User.findOneAndUpdate(
            {
                _id: req.user._id
            },
            {
                $push: {
                    payments: {
                        info: body.info,
                        amount: body.amount,
                        date: new Date().toLocaleDateString('fa-IR')
                    }
                }
            }
        );
        // if (!user) {
        //     return res.status(404).json({ Error: 'User not found' });
        // }
        if (handleUserValidate(user, res)) {
            return;
        }
        handleMessage(res, 'Payment has been saved');
    } catch (error) {
        handleException(res, error);
    }
});

// list of payments
app.get('/api/payments', authenticate, async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.user._id });

        if (!user) {
            return res.status(404).json({ Error: 'User not found' });
        }
        res.status(200).send(user.payments);
    } catch (error) {
        return res.status(500).json({ Error: `Something went wrong ${error}` });
    }
});

app.get('/api/payments/sum', authenticate, async (req, res) => {
    try {
        let amount = [];
        let user = await User.findOne({
            _id: req.user._id
        });
        if (!user) {
            return res.status(404).json({ Error: 'User not found' });
        }
        user.payments.forEach(py => {
            let today = new Date();
            if (today.isSameMonth(py.date)) {
                amount.push(py.amount);
            }
        });
        return res.status(200).json({ Sum: `${_.sum(amount)}` });
    } catch (error) {
        return res.status(500).json({ Error: `Something went wrong ${error}` });
    }
});
app.get('/api/payments/report/:date', authenticate, async (req, res) => {
    try {
        let report = [];
        let slashDate = req.params.date.replaceAll('-', '/');
        let user = await User.findOne({ _id: req.user._id });

        if (!user) {
            return res.status(404).json({ Error: 'User not found' });
        }

        user.payments.forEach(elm => {
            let d = new Date(elm.date);
            if (d.isSameDate(slashDate)) {
                report.push(elm);
            }
        });
        return res.status(200).json({ Report: { report } });
    } catch (error) {
        return res.status(500).json({ Error: `Something went wrong ${error}` });
    }
});

// delete a payment
app.delete('/api/payment/:id', authenticate, async (req, res) => {
    try {
        let id = req.params.id;
        logmog.cflog('Payment id for deletion : ' + id);
        let user = await User.findByIdAndUpdate(
            {
                _id: req.user._id,
                'payments._id': id
            },
            {
                $pull: {
                    payments: {
                        _id: id
                    }
                }
            }
        );

        if (!user) {
            return res.status(404).json({
                Error: 'User not found'
            });
        }
        logmog.cflog('Payment has been deleted');
        return res.status(200).json({ Message: 'Payment has been deleted' });
    } catch (error) {
        return res.status(500).json({ Error: `Somethign went wrong ${error}` });
    }
});

app.patch('/api/payment', authenticate, async (req, res) => {
    try {
        let body = _.pick(req.body, ['id', 'info', 'amount', 'date']);
        let user = await User.findOneAndUpdate(
            {
                _id: req.user._id,
                'payments._id': body.id
            },
            {
                $set: {
                    'payments.$.info': body.info,
                    'payments.$.amount': body.amount,
                    'payments.$.date': body.date
                }
            }
        );

        if (!user) {
            return res.status(404).json({ Error: 'User not found' });
        }
        return res.status(200).json({ Message: 'Payment has been updated.' });
    } catch (error) {
        return res.status(500).json({ Error: `Something went wrong ${error}` });
    }
});

// ---------------------- incomes routes
// add an income
app.post('/api/income', authenticate, async (req, res) => {
    try {
        let body = _.pick(req.body, ['info', 'amount']);
        let user = await User.findOneAndUpdate(
            { _id: req.user._id },
            {
                $push: {
                    incomes: {
                        info: body.info,
                        amount: body.amount,
                        date: new Date().toLocaleDateString('fa-IR')
                    }
                }
            }
        );

        if (!user) {
            return res.status(404).json({ Error: 'User not found' });
        }
        return res.status(200).json({ Message: 'income has been saved' });
    } catch (error) {
        return res.status(500).json({ Error: `Somethig went wrong ${error}` });
    }
});

// list of incomes
app.get('/api/incomes', authenticate, async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.user._id });
        if (!user) {
            return res.status(404).json({ Error: 'User not found' });
        }
        res.status(200).send(user.incomes);
    } catch (error) {
        return res.status(500).json({ Error: `Something went wrong ${error}` });
    }
});

// delete an income
app.delete('/api/income/:id', authenticate, async (req, res) => {
    try {
        let id = req.params.id;
        let user = await User.findByIdAndUpdate(
            {
                _id: req.user._id,
                'incomes._id': id
            },
            {
                $pull: {
                    incomes: {
                        _id: id
                    }
                }
            }
        );
        if (!user) {
            return res.status(404).json({ Error: 'User not found' });
        }
        return res.status(200).json({ Message: 'Income has been deleted' });
    } catch (error) {
        return res.status(500).json({ Error: `Something went wrong ${error}` });
    }
});

app.patch('/api/income', authenticate, async (req, res) => {
    try {
        let body = _.pick(req.body, ['id', 'info', 'amount', 'date']);
        let user = await User.findOneAndUpdate(
            {
                _id: req.user.id,
                'incomes._id': body.id
            },
            {
                $set: {
                    'incomes.$.info': body.info,
                    'incomes.$.amount': body.amount,
                    'incomes.$.date': body.date
                }
            }
        );
        if (!user) {
            return res.status(404).json({ Error: 'User not found' });
        }
        return res.status(200).json({ Message: 'Income has been updated' });
    } catch (error) {
        return res
            .status(500)
            .json({ Error: `Something went wrong, ${error}` });
    }
});

app.get('/api/incomes/sum', authenticate, async (req, res) => {
    try {
        let amount = [];
        let user = await User.findOne({
            _id: req.user._id
        });
        if (!user) {
            return res.status(404).json({ Error: 'User not found' });
        }
        user.incomes.forEach(py => {
            let today = new Date();
            if (today.isSameMonth(py.date)) {
                amount.push(py.amount);
            }
        });
        return res.status(200).json({ Sum: `${_.sum(amount)}` });
    } catch (error) {
        return res.status(500).json({ Error: `Something went wrong ${error}` });
    }
});
app.get('/api/incomes/report/:date', authenticate, async (req, res) => {
    try {
        let report = [];
        let slashDate = req.params.date.replaceAll('-', '/');
        let user = await User.findOne({ _id: req.user._id });

        if (!user) {
            return res.status(404).json({ Error: 'User not found' });
        }

        user.incomes.forEach(elm => {
            let d = new Date(elm.date);
            if (d.isSameDate(slashDate)) {
                report.push(elm);
            }
        });
        return res.status(200).json({ Report: { report } });
    } catch (error) {
        return res.status(500).json({ Error: `Something went wrong ${error}` });
    }
});

// ---------------------- root route

app.get('/', (req, res) => {
    res.send('Selfculator (/) Api');
});

app.listen(config.get('PORT'), () => {
    logmog.cflog(
        `Selfculator Server is Listening on PORT: ${config.get('PORT')}`
    );
});
