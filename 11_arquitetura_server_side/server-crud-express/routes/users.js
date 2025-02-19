var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Lista de usuarios');
});

router.get('/1', function(req, res, next) {
  res.send('Usuario numero 1');
});

module.exports = router;
