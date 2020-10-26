const mongoose = require('mongoose')


// Book Schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }]
})
// Virtual property for generating book's URL
bookSchema
    .virtual('url')
    .get(function() {
        const book = this
        return '/catalog/book/' + book._id
    })
// Compiled Book Class
const Book = mongoose.model('Book', bookSchema)

module.exports = Book

