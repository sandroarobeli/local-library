const Genre = require('../models/genre');
const Book = require('../models/book')

// Display list of all Genre.
exports.genre_list = async (req, res, next) => {
    try {
        const genres = await Genre.find({}).sort({name:'ascending'})
        res.render('genre_list', {title: 'Genre List', genres})
    } catch (error) {
        return next(error)
    }
};
// Display detail page for a specific Genre.
exports.genre_detail = async (req, res, next) => {
    try {
        const genre = Genre.findById(req.params.id)
        const genre_books = Book.find({genre: req.params.id})
        const results = await Promise.all([genre, genre_books])
        res.render('genre_detail', {title: 'Genre Detail', genre: results[0].length === 0 ? 'Genre not found' : results[0], genre_books: results[1] })
    } catch (error) {
        if (error) {
            return next(error)
        }
        if (results[0] === null) {
            return next(new Error('Genre not found'))
        }
    }
};
// Display Genre create form on GET.
exports.genre_create_get = (req, res) => {
    res.send('Genre create GET');
};
// Handle Genre create on POST.
exports.genre_create_post = (req, res) => {
    res.send('Genre create POST');
};
// Display Genre delete form on GET.
exports.genre_delete_get = (req, res) => {
    res.send('Genre delete GET');
};
// Handle Genre delete on POST.
exports.genre_delete_post = (req, res) => {
    res.send('Genre delete POST');
};
// Display Genre update form on GET.
exports.genre_update_get = (req, res) => {
    res.send('Genre update GET');
};
// Handle Genre update on POST.
exports.genre_update_post = (req, res) => {
    res.send('Genre update POST');
};