// importo il file data_posts
const posts = require('../data/posts');

// index => funzione
function index(req, res) {

    // Restituisce la lista completa dei post in formato JSON
    res.send(posts);

}

// show => funzione
function show(req, res) {

    // interpreta la stinga come numero decimale
    const postId = parseInt(req.params.id, 10);
    // ricerca dell'ID specificato
    const post = post.find(post => post.id === postID);

    // se il post non venisse trovato restituisco error 404
    if (!post) {

        return res.status(404).json({ error: 'Post non trovato' });

    }

    // Se il post esiste, restituisce i dettagli del post in formato JSON
    res.json(post);

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