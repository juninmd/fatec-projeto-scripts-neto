var controller = require('../controllers/livros.js');

app.get('/livros/menulivros', controller.menu);

app.get('/livros/livroslistar', controller.livrosListar);