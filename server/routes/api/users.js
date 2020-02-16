const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const userRoutes = express.Router();
const auth = require('../../helpers/auth');
const { dbPool } = require('../../helpers/initializer');
const config = require('config');
const jwt = require('jsonwebtoken');

userRoutes.get('/', auth, (req, res) => {
    dbPool.query('SELECT * FROM public."Users"', (error, results) => {
        if (error) {
            console.log(error);
        }
        res.status(200).json(results.rows);
    });
});

userRoutes.get('/:id/', auth, (req, res) => {
    const query = {
        name: 'fetch-an-user',
        text: 'SELECT * FROM public."Users" WHERE "Id" = $1',
        values: [req.params.id]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ Error: 'User not found' });
        }
        res.status(200).json(results.rows[0]);
    });
});

userRoutes.delete('/:id/', auth, (req, res) => {
    const query = {
        name: 'delete-a-user',
        text: 'DELETE FROM public."Users" WHERE "Id" = $1',
        values: [req.params.id]
    };
    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
        }

        res.status(200).json({ Message: 'User has been deleted.' });
    });
});

userRoutes.post('/register', async (req, res) => {
    const body = _.pick(req.body, [
        'FirstName',
        'LastName',
        'UserName',
        'Email',
        'Password'
    ]);

    const salt = await bcrypt.genSalt(10);
    let password = await bcrypt.hash(req.body.Password, salt);
    const query = {
        name: 'insert-a-user',
        text: `INSERT INTO public."Users"
            ("FirstName","LastName","UserName","Email","Password","IsActive","LastLogin","Attempt") 
            VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,
        values: [
            body.FirstName,
            body.LastName,
            body.UserName,
            body.Email,
            password,
            1,
            new Date(),
            0
        ]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ Error: error });
        }
        res.status(200).json({ Message: 'User created.' });
    });
});

userRoutes.post('/login', async (req, res) => {
    const query = {
        name: 'fetch-an-user-by-email',
        text: 'SELECT * FROM public."Users" WHERE "UserName" = $1 ',
        values: [req.body.UserName]
    };

    dbPool.query(query, async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ Error: 'User not found!' });
        }
        const user = results.rows[0];
        console.log('pass1:' + req.body.Password);
        console.log('pass2:' + user.Password);

        bcrypt.compare(req.body.Password, user.Password, (err, result) => {
            if (!result)
                return res
                    .status(402)
                    .json({ Error: 'Invalid email or password.' });

            const token = jwt.sign({ _id: this._id }, config.get('jwt_secret'));

            res.status(200).send(token);
        });
    });
});

module.exports = userRoutes;
