var controller = require('../controllers/inicio.js');

app.get('/', controller.parcial);

app.get('/index', controller.index);

app.post('/login', controller.index);

app.get('/login', controller.index);

app.get('/logout', controller.logout);

app.get('/inicio/menubanco', controller.menubanco);