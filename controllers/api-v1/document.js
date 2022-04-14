const express = require('express');
const router = express.Router();
const db = require('../../models');

// GET - View all categories
router.get('/', async (req, res) => {
    const allDocuments = await db.Document.find({});

    res.json(allDocuments);
});

// GET - view a single category
router.get('/:documentId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const formOne = await db.Document.findById({_id: documentId})
        res.status(202).json(oneDeck)
    } catch (err) {
        console.log(err)
        res.status(503).json({msg: "Something isn't right."})
    }
})