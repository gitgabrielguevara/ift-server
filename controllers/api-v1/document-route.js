const express = require('express');
const router = express.Router();
// const db = require('../../models');
const { 
    getDocument, 
    setDocument, 
    updateDocument, 
    deleteDocument} = require('../../controllers/document')

router.get('/', getDocument)
router.post('/', setDocument)
router.put('/:id', updateDocument)
router.delete('/:id', deleteDocument)

module.exports = router

// GET - View all categories
// router.get('/', async (req, res) => {
//     const allDocuments = await db.Document.find({});

//     res.json(allDocuments);
// });

// // GET - view a single document
// router.get('/:documentId', async (req, res) => {
//     try {
//         const categoryId = req.params.categoryId;
//         const formOne = await db.Document.findById({_id: documentId})
//         res.status(202).json(oneForm)
//     } catch (err) {
//         console.log(err)
//         res.status(503).json({msg: "Something isn't right."})
//     }
// })

