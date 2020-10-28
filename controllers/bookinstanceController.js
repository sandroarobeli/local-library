const BookInstance = require('../models/bookinstance');


// Display list of all BookInstances.
exports.bookinstance_list = (req, res) => {
    res.send('BookInstance list');
};
// Display detail page for a specific BookInstance.
exports.bookinstance_detail = (req, res) => {
    res.send('BookInstance detail: ' + req.params.id);
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