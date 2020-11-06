const async = require('async')
const Book = require('../models/book');
const Author = require('../models/author')
const BookInstance = require('../models/bookinstance')
const Genre = require('../models/genre')

// Display the site welcome page
exports.index = async (req, res) => {
    try {
        const book_count = Book.countDocuments({})
        const book_instance_count = BookInstance.countDocuments({})
        const book_instance_available_count = BookInstance.countDocuments({status: 'Available'})
        const author_count = Author.countDocuments({})
        const genre_count = Genre.countDocuments({})
        const results = await Promise.all([book_count, book_instance_count, book_instance_available_count, author_count, genre_count])
        res.render('index', {
            title: 'Local Library Home',
            book_count: results[0],
            book_instance_count: results[1],
            book_instance_available_count: results[2],
            author_count: results[3],
            genre_count: results[4]
        })
    } catch (error) {
        res.render('index', { error } )
    }
};
// Display list of all books.
exports.book_list = async (req, res, next) => {
    try {
      const books = await Book.find({}, 'title author').populate('author').exec()
      res.render('book_list', {title: 'Book List', books})
    } catch (error) {
      return next(error) 
    }
};
// Display detail page for a specific book.
exports.book_detail = async (req, res, next) => {
    try {
        const book = Book.findById(req.params.id)
            .populate('author')
            .populate('genre')
            .exec()
        const book_instance = BookInstance.find({ 'book': req.params.id}) 
        const results = await Promise.all([book, book_instance])
        res.render('book_detail', { title: results[0].title, book: results[0], book_instances: results[1]})   
    } catch (error) {
        if (error) {
            return next(error)
        }
        if (results[0] === null) {
            return next(new Error('Book not found'))
        }
    }
};
// Display book create form on GET.
exports.book_create_get = (req, res) => {
    res.send('Book create GET');
};
// Handle book create on POST.
exports.book_create_post = (req, res) => {
    res.send('Book create POST');
};
// Display book delete form on GET.
exports.book_delete_get = (req, res) => {
    res.send('Book delete GET');
};
// Handle book delete on POST.
exports.book_delete_post = (req, res) => {
    res.send('Book delete POST');
};
// Display book update form on GET.
exports.book_update_get = (req, res) => {
    res.send('Book update GET');
};
// Handle book update on POST.
exports.book_update_post = (req, res) => {
    res.send('Book update POST');
};