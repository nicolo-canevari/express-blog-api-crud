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
    const post = posts.find(post => post.id === postID);

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

    // Estraggo l'ID del post dalla richiesta (params) e lo converte in un intero
    const postId = parseInt(req.params.id, 10);

    // Trovo l'indice del post da eliminare nell'array dei post
    const postIndex = post.findIndex(post => post.id === postId);

    // Se il post non venisse trovato restituisce error 404
    if (postIndex === -1) {

        return res.status(404).json({ error: 'Post non trovato' });

    }

    // Rimuovo il post dall'array dei post usando splice
    posts.splice(postIndex, 1);

    // Stampo la lista aggiornata dei post nel terminale per visualizzare la modifica
    console.log('Lista dei post aggiornata:', posts);

    // Rispondo con stato 204 (No Content) per indicare che l'eliminazione è stata completata senza errori
    res.status(204).send();

}

// esporto tutto
module.exports = { index, show, store, update, destroy };