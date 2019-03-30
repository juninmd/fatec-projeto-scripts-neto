module.exports = {
    menu
}  

function menu(req, res) {
  res.render('livros/frm_menulivros.ejs', {title: 'Livros'});      
}
