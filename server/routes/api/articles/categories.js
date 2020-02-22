const express = require('express');
const { dbPool } = require('../../../helpers/initializer');
const _ = require('lodash');
const auth = require('../../../helpers/auth');

const categoriesRoutes = express.Router();

categoriesRoutes.get('/', (req, res) => {
    dbPool.query(
        'SELECT "Id", "Name" FROM public."Categories"',
        (error, results) => {
            if (error) {
                console.log(error);
            }
            res.status(200).json(results.rows);
        }
    );
});

categoriesRoutes.get('/:id/', auth, (req, res) => {
    const query = {
        name: 'fetch-an-category',
        text: 'SELECT * FROM public."Categories" WHERE "Id" = $1',
        values: [req.params.id]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ Error: 'Category not found' });
        }
        res.status(200).json(results.rows[0]);
    });
});

categoriesRoutes.delete('/:id/', auth, (req, res) => {
    const query = {
        name: 'delete-a-category',
        text: 'DELETE FROM public."Categories" WHERE "Id" = $1',
        values: [req.params.id]
    };
    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
        }

        res.status(200).json({ Message: 'Category has been deleted.' });
    });
});

categoriesRoutes.post('/', auth, (req, res) => {
    const body = _.pick(req.body, ['Name']);
    console.log(body);
    const query = {
        name: 'insert-a-category',
        text: `INSERT INTO public."Categories"
            ("Name") 
            VALUES($1)`,
        values: [body.Name]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ Error: error });
        }
        res.status(200).json({ Message: 'Category saved.' });
    });
});

categoriesRoutes.put('/', auth, (req, res) => {
    const body = _.pick(req.body, ['Id', 'Name']);
    console.log(body);
    const query = {
        name: 'update-a-category',
        text: `UPDATE public."Categories" SET  "Name"=($2) WHERE "Id"=($1)`,
        values: [body.Id, body.Name]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ Error: error });
        }
        res.status(200).json({ Message: 'Category updated.' });
    });
});

module.exports = categoriesRoutes;
