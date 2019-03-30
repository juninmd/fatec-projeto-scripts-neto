//var Controller = require('../models/inicio.js');

module.exports = {
  
    menu,
    veiculos,
    empresas

}  

function menu(req, res) {
  res.render('formularios/frm_menu.ejs', {title: 'Formulários'});      
}

function veiculos(req, res) {
  res.render('formularios/frm_veiculos.ejs', {title: 'Veículos'});      
}

function empresas(req, res) {
  res.render('formularios/frm_empresas.ejs', {title: 'Empresas'});      
}
