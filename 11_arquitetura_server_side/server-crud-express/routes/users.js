var express = require('express');
var router = express.Router();

/* GET users lista */
router.get('/', function(req, res, next) {
  res.send('Listagem de TODOS usuarios');
});

/* GET users lista */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.send(`Usuario de ID: ${id}`);
});

// POST usuario
router.post('/', function(req, res, next) {
  res.send('Criar usuario');
});

// DELETE usuario
router.delete('/', function(req, res, next) {
  res.send('Deletar usuario');
});

// PUT usuario
router.put('/', function(req, res, next) {
  res.send('Atualizar usuario');
});

module.exports = router;
