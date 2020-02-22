const express = require('express');
const { dbPool } = require('../../../helpers/initializer');
const _ = require('lodash');
const articleRoutes = express.Router();

articleRoutes.get('/', (req, res) => {
    dbPool.query(
        'SELECT "Id", "Title","Summary", "Thumbnail","RegDate" FROM public."Articles"',
        (error, results) => {
            if (error) {
                console.log(error);
            }
            res.status(200).json(results.rows);
        }
    );
});

articleRoutes.get('/:id/', (req, res) => {
    const query = {
        name: 'fetch-an-article',
        text: 'SELECT * FROM public."Articles" WHERE "Id" = $1',
        values: [req.params.id]
    };
    const queryTags = {
        name: 'fetch-all-tags',
        text: `SELECT * FROM public."ArticleTags"
            JOIN public."Tags" ON public."ArticleTags"."TagId" = public."Tags"."Id"
        WHERE "ArticleId" = $1`,
        values: [req.params.id]
    };
    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ Error: 'Article not found' });
        }
        dbPool.query(queryTags, (err, resSql) => {
            if (err) {
                console.log(err);
            }

            res.status(200).json({ ...results.rows[0], tags: resSql.rows });
        });
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
    const body = _.pick(req.body, [
        'Title',
        'Summary',
        'Content',
        'Thumbnail',
        'Tags'
    ]);
    console.log(body.Tags);
    const queryInsertAnDocument = {
        name: 'insert-an-article',
        text: `INSERT INTO public."Articles"
            ("Title","Summary","Content","Thumbnail","RegDate") 
            VALUES($1, $2, $3, $4, $5)  RETURNING "Id"`,
        values: [
            body.Title,
            body.Summary,
            body.Content,
            body.Thumbnail,
            new Date()
        ]
    };

    dbPool.query(queryInsertAnDocument, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ Error: error });
        }
        console.log('returning: ', results.rows);
        let articleId = results.rows[0].Id;

        body.Tags.map(tag => {
            const queryAddaTag = {
                name: 'insert-a-tag',
                text: `INSERT INTO public."ArticleTags"
                    ("ArticleId","TagId")
                    VALUES($1, $2)`,
                values: [articleId, tag.Id]
            };
            dbPool.query(queryAddaTag, (err, res) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ Error: err });
                }
            });
        });

        res.status(200).json({ Message: 'Article saved.' });
    });
});

articleRoutes.put('/', (req, res) => {
    const body = _.pick(req.body, [
        'Id',
        'Title',
        'Summary',
        'Content',
        'Thumbnail'
    ]);
    console.log(body);
    const query = {
        name: 'update-an-article',
        text: `UPDATE public."Articles" SET  "Title"=($2), "Summary"=($3), "Content"=($4), "Thumbnail"=($5) WHERE "Id"=($1)`,
        values: [
            body.Id,
            body.Title,
            body.Summary,
            body.Content,
            body.Thumbnail
        ]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ Error: error });
        }
        res.status(200).json({ Message: 'Article updated.' });
    });
});

module.exports = articleRoutes;
