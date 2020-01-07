const express = require('express');
const { dbPool } = require('../../helpers/initializer');
const articleRoutes = express.Router();
const _ = require('lodash');

articleRoutes.get('/', (req, res) => {
    dbPool.query('SELECT * FROM public."Articles"', (error, results) => {
        if (error) {
            console.log(error);
        }
        res.status(200).json(results.rows);
    });
});

articleRoutes.get('/:id/', (req, res) => {
    const query = {
        name: 'fetch-an-article',
        text: 'SELECT * FROM public."Articles" WHERE "Id" = $1',
        values: [req.params.id]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ Error: 'Article not found' });
        }
        res.status(200).json(results.rows[0]);
    });
});

articleRoutes.delete('/:id/', (req, res) => {
    const query = {
        name: 'delete-an-article',
        text: 'DELETE FROM public."Articles" WHERE "Id" = $1',
        values: [req.params.id]
    };
    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
        }

        res.status(200).json({ Message: 'Article has been deleted.' });
    });
});

articleRoutes.post('/', (req, res) => {
    const body = _.pick(req.body, ['Title', 'Summary', 'Content']);
    console.log(body);
    const query = {
        name: 'insert-an-article',
        text: `INSERT INTO public."Articles"
            ("Title","Summary","Content") 
            VALUES($1, $2,$3)`,
        values: [body.Title, body.Summary, body.Content]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ Error: error });
        }
        res.status(200).json({ Message: 'Article saved.' });
    });
});

module.exports = articleRoutes;
