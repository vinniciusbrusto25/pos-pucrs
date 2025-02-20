var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { listAll } = require('../controllers/postcards');

router.get('/', (req, res) => {
    listAll(res);
  });

module.exports = router;


