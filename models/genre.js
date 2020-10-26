const mongoose = require('mongoose')


// Genre Schema
const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 100
    }
})
// Virtual property for generating genre's URL
genreSchema
    .virtual('url')
    .get(function() {
        const genre = this
        return '/catalog/genre/' + genre._id
    })
// Compiled Genre Class
const Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre