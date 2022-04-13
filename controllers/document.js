const express = require('express');
const router = express.Router();
const db = require('../models');

// GET - View all documents
router.get('/', async (req, res) => {
    const allDocuments = await db.Document.find({});
    res.json(allDocuments);
});

// GET - view a single document
router.get('/:documentId', async (req, res) => {
    try {
        const documentId = req.params.documentId;
        const formOne = await db.Document.findById({_id: documentId})
        res.status(202).json(formOne)
    } catch (err) {
        console.log(err)
        res.status(503).json({msg: "what went wrong"})
    }
})