const mongoose = require('mongoose')
const { DateTime } = require('luxon')


// BookInstance Schema
const bookInstanceSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true                                          
    },
    imprint: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Available','Maintenance','Loaned','Reserved'],
        default: 'Maintenance'
    },
    due_back: {
        type: Date,
        default: Date.now
    }
})
// Virtual property for generating bookInstance's URL
bookInstanceSchema
    .virtual('url')
    .get(function() {
        const bookInstance = this
        return '/catalog/bookinstance/' + bookInstance._id
    })
// Virtual property to format due_back date output
bookInstanceSchema
    .virtual('due_back_formatted')
    .get(function() {
        const bookInstance = this
        return DateTime.fromJSDate(bookInstance.due_back).toLocaleString(DateTime.DATE_MED);
    })      
// Compiled BookInstance Class
const BookInstance = mongoose.model('BookInstance', bookInstanceSchema)

module.exports = BookInstance