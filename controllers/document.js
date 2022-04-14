
const asyncHandler = require ('express-async-handler')

const Document = require('../models/document')

// Get a specific users document
// route GET /api/document
const getDocument = asyncHandler (async (req, res) => {
    const document = await Document.find()
    res.status(200).json(document)
})

// Set a specific users document 
// route POST /api/document
const setDocument = asyncHandler (async (req, res) => {
    if(!req.body.text) {
    res.status(400) 
    throw new Error ('Please add a text field')
    }

    const document = await Document.create({
        text: req.body.text
    })
    res.status(200).json(document)     
})

// Update a specific users document
// route PUT /api/document/:id
const updateDocument = asyncHandler (async (req, res) => {
    const document = await Document.findById(req.params.id)

    if(!document) {
        res.status(400)
        throw new Error('Document not found')
    }

    const updatedDocument = await Document.findByIdAndUpdate(req.params.id, req.body, {new: true} )

    res.status(200).json(updatedDocument)
})

// Delete a specific users document
// route GET /api/document/:id
const deleteDocument = asyncHandler (async (req, res) => {
    const document = await Document.findById(req.params.id)

    if(!document) {
        res.status(400)
        throw new Error('Document not found')
    }

    await document.remove()

    res.status(200).json({message:`Delete Document ${req.params.id}`})
})

module.exports = {
    getDocument,
    setDocument,
    updateDocument,
    deleteDocument
}