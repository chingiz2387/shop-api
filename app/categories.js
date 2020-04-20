const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

const createRouter = () => {
    router.get('/', async (req, res) => {
        try {
            const categories = await Category.find();
            res.send(categories);
        } catch (e) {
            res.status(500).send({message: e});
        }
    });

    router.post('/', async (req, res) => {
        const category = new Category(req.body);
        try {
            res.send(await category.save());
        } catch (e) {
            res.sendStatus(400);
        }

    });

    return router;
};

module.exports = createRouter;
