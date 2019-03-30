/*
/     configurações de acesso ao banco de dados
*/
var mysql = require('mysql');
var database = 'dados191n';

// instanciar objeto de acesso ao banco de dados
var client = mysql.createConnection({
    user: 'root',
    password: 'fatec123*',
    host: 'localhost',
    port: 3306
});

client.query('USE ' + database);

module.exports = client;
