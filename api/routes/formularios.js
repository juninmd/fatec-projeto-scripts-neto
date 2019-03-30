var controller = require('../controllers/formularios.js');

app.get('/formularios/menu', controller.menu);

app.get('/formularios/veiculos', controller.veiculos);

app.get('/formularios/empresas', controller.empresas);




