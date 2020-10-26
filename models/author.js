const mongoose = require('mongoose')


// Author Schema
const authorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        maxlength: 100
    },
    family_name: {
        type: String,
        required: true,
        maxlength: 100
    },
    date_of_birth: Date,
    date_of_death: Date
})
// Virtual property for forming author's full name
authorSchema
    .virtual('name')
    .get(function() {
        const author = this
        return author.first_name + ' ' + author.family_name
    })
// Virtual property for author's lifespan
authorSchema
    .virtual('lifespan')
    .get(function () {
        const author = this
        return (author.date_of_death.getYear() - author.date_of_birth.getYear()).toString()
    })
// Virtual property for generating author's URL
authorSchema
    .virtual('url')
    .get(function() {
        const author = this
        return '/catalog/author/' + author._id
    })     
// Compiled Author Class
const Author = mongoose.model('Author', authorSchema)

module.exports = Author