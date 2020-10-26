const mongoose = required('mongoose')


// BookInstance Schema
const bookInstanceSchema = new mongoose.Schema({
    book: {
        type: Schema.Types.ObjectId,
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
        return '/catalog/bookinstance/' + BookInstance._id
    })
// Compiled BookInstance Class
const BookInstance = mongoose.model('BookInstance', bookInstanceSchema)

module.exports = BookInstance