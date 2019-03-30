var controller = require('../controllers/livros.js');

app.get('/livros/menu', controller.menu);
