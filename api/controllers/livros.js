var Livros = require('../models/livros.js');

module.exports = {
  menu,
  livrosListar
}

function menu(req, res) {
  res.render('livros/frm_menulivros.ejs', { title: 'Livros' });
}

function livrosListar(req, res) {
  Livros.listarLivros(function (err, result) {
    console.log("Listar Livros: ");
    if (err) {
      throw err;
    }
    res.render('livros/frm_livrosListar.ejs',
      {
        title: 'Listar Livros',
        livros: result
      });
  });
};