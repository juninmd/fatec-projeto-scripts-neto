/*
/     configurações de acesso ao banco de dados
*/
var mysql = require('mysql');
var database = 'dados_fatec';

// instanciar objeto de acesso ao banco de dados
var client = mysql.createConnection({
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306
});

client.query('USE ' + database);

module.exports = client;
