const mongoose = require('mongoose')

const documentSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Add something to the document here'],
    },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Document', documentSchema)


