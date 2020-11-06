const { nextTick } = require('async')
const Author = require('../models/author')
const Book = require('../models/book')

// Display list of all Authors
exports.author_list = async (req, res, next) => {
    try {
        const authors = await Author.find({}).sort({family_name:'ascending'})
        res.render('author_list', {title: 'Author List', authors})
    } catch (error) {
        return next(error)
    }
}
// Display detail page for a specific Author
exports.author_detail = async (req, res, next) => {
    try {
        const author = Author.findById(req.params.id)
        const authors_books = Book.find({ author: req.params.id}, 'title summary')
        const results = await Promise.all([author, authors_books])
        res.render('author_detail', {title: 'Author Detail', author: results[0], author_books: results[1]})
    } catch (error) {
        if (error) {
            return next(error)
        }
        if (results[0] === null) {
            return next(new Error('Author not found'))
        }
    }
}
// Display Author create form on GET
exports.author_create_get = (req, res) => {
    res.send('Author create GET')
}
// Handle Author create on POST
exports.author_create_post = (req, res) => {
    res.send('Author create POST')
}
// Display Author delete form on GET
exports.author_delete_get = (req, res) => {
    res.send('Author delete GET')
}
// Handle Author delete on POST
exports.author_delete_post = (req, res) => {
    res.send('Author delete POST')
}
// Display Author update form on GET
exports.author_update_get = (req, res) => {
    res.send('Author update GET')
}
// Handle Author update on POST
exports.author_update_post = (req, res) => {
    res.send('Author update POST')
}