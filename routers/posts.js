// importo express
const express = require('express');

// creo un router
const router = express.Router();

// importo le funzioni del controller
const postController = require('../controllers/controllerPost');

// index => visualizza tutti gli elementi
router.get('/', postController.index);

// show => visualizzare un elemento tramite id
router.get('/:id', postController.show);

// store => creare un elemento
router.post('/', postController.store);

// update => per modificare l'elemento
// put prende tutto l'elemento
router.put('/:id', postController.update);

// delete => per cancellare un elemento
router.delete('/:id', postController.destroy);


// esportazione del router
module.exports = router;