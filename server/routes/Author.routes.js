const AuthorController = require('../controllers/Author.controller');
module.exports = function(app){
    app.get('/api/Authors', AuthorController.findAllAuthors);
    app.get('/api/Authors/:id', AuthorController.oneAuthor);
    app.post('/api/Authors/new', AuthorController.create);
    app.put('/api/Authors/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/Authors/delete/:id', AuthorController.deleteAuthor);
}