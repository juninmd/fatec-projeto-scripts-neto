var autores = require('../models/autores.js');

module.exports = {
  
    menu,
    autoresListar

}  

function menu(req, res) {
  res.render('autores/frm_menuautores.ejs', {title: 'Autores'});      
}

function autoresListar(req, res){
    autores.autoresListar(function (err, result){
        console.log("Resultado: ");
        if(err) {
            throw err;
        }
        res.render('autores/autoresListar.ejs', 
            {title: 'Autores',
             autores: result});
    });
};

