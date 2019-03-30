var controller = require('../controllers/livros.js');

app.get('/livros/menu', controller.menu);

app.get('/livros/menulivros', controller.menuLivros);

app.get('/livros/livroslistar', controller.livrosListar);