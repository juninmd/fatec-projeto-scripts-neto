//var controller = require('../models/inicio.js');

module.exports = {

    index,
    login,
    logout,
    parcial,
    menubanco

}

function index(req, res) {
  res.render('inicio/index.ejs', {title: 'Estágio'});
}

function login(req, res) {
  res.render('inicio/login.ejs', {title: 'Login'});
}

function logout(req, res) {
  res.render('inicio/logout.ejs', {title: 'Logout'});
}

function parcial(req, res) {
  res.render('parcial/menu.ejs', {title: 'Menu'});
}

function menubanco(req, res) {
  res.render('inicio/frm_menubanco.ejs', {title: 'Banco Dados'});
}