const express = require('express')
const router = express.Router()


// Require controller modules.
const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController');
const genreController = require('../controllers/genreController');
const bookinstanceController = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/catalog', bookController.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/catalog/book/create', bookController.book_create_get);

// POST request for creating Book.
router.post('/catalog/book/create', bookController.book_create_post);

// GET request to delete Book.
router.get('/catalog/book/:id/delete', bookController.book_delete_get);

// POST request to delete Book.
router.post('/catalog/book/:id/delete', bookController.book_delete_post);

// GET request to update Book.
router.get('/catalog/book/:id/update', bookController.book_update_get);

// POST request to update Book.
router.post('/catalog/book/:id/update', bookController.book_update_post);

// GET request for one Book.
router.get('/catalog/book/:id', bookController.book_detail);

// GET request for list of all Book items.
router.get('/catalog/books', bookController.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/catalog/author/create', authorController.author_create_get);

// POST request for creating Author.
router.post('/catalog/author/create', authorController.author_create_post);

// GET request to delete Author.
router.get('/catalog/author/:id/delete', authorController.author_delete_get);

// POST request to delete Author.
router.post('/catalog/author/:id/delete', authorController.author_delete_post);

// GET request to update Author.
router.get('/catalog/author/:id/update', authorController.author_update_get);

// POST request to update Author.
router.post('/catalog/author/:id/update', authorController.author_update_post);

// GET request for one Author.
router.get('/catalog/author/:id', authorController.author_detail);

// GET request for list of all Authors.
router.get('/catalog/authors', authorController.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/catalog/genre/create', genreController.genre_create_get);

//POST request for creating Genre.
router.post('/catalog/genre/create', genreController.genre_create_post);

// GET request to delete Genre.
router.get('/catalog/genre/:id/delete', genreController.genre_delete_get);

// POST request to delete Genre.
router.post('/catalog/genre/:id/delete', genreController.genre_delete_post);

// GET request to update Genre.
router.get('/catalog/genre/:id/update', genreController.genre_update_get);

// POST request to update Genre.
router.post('/catalog/genre/:id/update', genreController.genre_update_post);

// GET request for one Genre.
router.get('/catalog/genre/:id', genreController.genre_detail);

// GET request for list of all Genre.
router.get('/catalog/genres', genreController.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/catalog/bookinstance/create', bookinstanceController.bookinstance_create_get);

// POST request for creating BookInstance. 
router.post('/catalog/bookinstance/create', bookinstanceController.bookinstance_create_post);

// GET request to delete BookInstance.
router.get('/catalog/bookinstance/:id/delete', bookinstanceController.bookinstance_delete_get);

// POST request to delete BookInstance.
router.post('/catalog/bookinstance/:id/delete', bookinstanceController.bookinstance_delete_post);

// GET request to update BookInstance.
router.get('/catalog/bookinstance/:id/update', bookinstanceController.bookinstance_update_get);

// POST request to update BookInstance.
router.post('/catalog/bookinstance/:id/update', bookinstanceController.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/catalog/bookinstance/:id', bookinstanceController.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/catalog/bookinstances', bookinstanceController.bookinstance_list);



module.exports = router