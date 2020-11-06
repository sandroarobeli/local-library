const mongoose = require('mongoose')
const { DateTime } = require('luxon')

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
        if (author.first_name && author.family_name) {
            return author.first_name + ' ' + author.family_name
        }
        if (!author.first_name || !author.family_name) {
            return ""
        }
    })
// Virtual property for author's lifespan
authorSchema
    .virtual('lifespan')
    .get(function () {
        const author = this
        if (author.date_of_death) {
            return (author.date_of_death.getFullYear() - author.date_of_birth.getFullYear()).toString()
        }
        return "Still alive"
    })
// Virtual property for generating author's URL
authorSchema
    .virtual('url')
    .get(function() {
        const author = this
        return '/catalog/author/' + author._id
    })     
// Virtual property to format date_of_birth/death date output
authorSchema    
    .virtual('lifespan_formatted')
    .get(function() {
        const author = this
        if (author.date_of_death) {
            return DateTime.fromJSDate(author.date_of_birth).toLocaleString(DateTime.DATE_MED) + ' - ' + DateTime.fromJSDate(author.date_of_death).toLocaleString(DateTime.DATE_MED) 
        } 
        else if (!author.date_of_death && !author.date_of_birth) {
            return 'Dates not available'
        } 
        return DateTime.fromJSDate(author.date_of_birth).toLocaleString(DateTime.DATE_MED) + ' - Still alive ';
    })          
// Compiled Author Class
const Author = mongoose.model('Author', authorSchema)

module.exports = Author