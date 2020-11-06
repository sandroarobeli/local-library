const BookInstance = require('../models/bookinstance');


// Display list of all BookInstances.
exports.bookinstance_list = async (req, res, next) => {
    try {
        const bookinstances = await BookInstance.find({}).populate('book').exec()
       // res.send(bookinstances)
       res.render('bookinstance_list', {title: 'Book Instance List', bookinstances})
    } catch (error) {
        return next(error)
    }
};
// Display detail page for a specific BookInstance.
exports.bookinstance_detail = async (req, res, next) => {
    try {
        const bookinstance = await BookInstance.findById(req.params.id).populate('book')
        res.render('bookinstance_detail', {title: 'Copy: ' + bookinstance.book.title, bookinstance})
    } catch (error) {
        if (error) {
            return next(error)
        }
        if (bookinstance === null) {
            return next(new Error('Book copy not found'))
        }
    }
};
// Display BookInstance create form on GET.
exports.bookinstance_create_get = (req, res) => {
    res.send('BookInstance create GET');
};
// Handle BookInstance create on POST.
exports.bookinstance_create_post = (req, res) => {
    res.send('BookInstance create POST');
};
// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = (req, res) => {
    res.send('BookInstance delete GET');
};
// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = (req, res) => {
    res.send('BookInstance delete POST');
};
// Display BookInstance update form on GET.
exports.bookinstance_update_get = (req, res) => {
    res.send('BookInstance update GET');
};
// Handle bookinstance update on POST.
exports.bookinstance_update_post = (req, res) => {
    res.send('BookInstance update POST');
};