// importo il file data_posts
const posts = require('../data/data_posts');

// index => funzione
function index(req, res) {

    res.send('Visualizza tutti gli elementi');

}

// show => funzione
function show(req, res) {

    res.send('Visualizza un elemento');

}

// store => fuzione
function store(req, res) {

    res.send('Creazione nuovo post ');

}

// update => funzione
function update(req, res) {

    res.send('Lista dei post ' + req.params.id);

}

// destroy/delete => funzione
function destroy(req, res) {

    res.send('Cancella post ' + req.params.id);

}

// esporto tutto
module.exports = { index, show, store, update, destroy };