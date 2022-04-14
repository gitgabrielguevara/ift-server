
const asyncHandler = require ('express-async-handler')

// Get a specific users document
// route GET /api/document
const getDocument = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Get document'})
})

// Set a specific users document
// route POST /api/document
const setDocument = asyncHandler (async (req, res) => {
    if(!req.body.text) {
    res.status(400) 
    throw new Error ('Please add a text field')
    }
    res.status(200).json({ message: 'Set document'})    
})

// Update a specific users document
// route PUT /api/document/:id
const updateDocument = asyncHandler (async (req, res) => {
    res.status(200).json({message:`Edit Document ${req.params.id}`})
})

// Delete a specific users document
// route GET /api/document/:id
const deleteDocument = asyncHandler (async (req, res) => {
    res.status(200).json({message:`Delete Document ${req.params.id}`})
})

module.exports = {
    getDocument,
    setDocument,
    updateDocument,
    deleteDocument
}