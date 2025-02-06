// importo express
const express = require('express');
// creo un router
const router = express.Router();

// importo array di posts contenuto in data
const posts = require('../data/posts');

// rotta per ottenere la lista dei post
router.get('/', (req, res) => {

  // restituzione dell'array di oggetti in formato json
  res.json(posts);

});

// show => visualizzare un elemento tramite id
router.get('/:id', function (req, res) {

  // restituisce il singolo elemento in formato json
  res.json(posts[req.params.id]);

})

// store => creare un elemento
router.post('/', function (req, res) {

  res.send('Creazione nuovo post ');
  console.log('Creazione nuovo post ');

});

// update => per modificare l'elemento
// put prende tutto l'elemento
router.put('/:id', function (req, res) {

  res.send('Lista dei post ' + req.params.id);

});

// delete => per cancellare un elemento
router.delete('/:id', function(req, res) {

  res.send('Cancella post post' + req.params.id);

});


// esportazione del router
module.exports = router;