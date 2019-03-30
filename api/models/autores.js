var client = require('../../config/conexao.js');

module.exports = {
    listarAutores
}


function listarAutores (callback) {
    client.query('select * from autores order by aut_apelido', callback);
}

