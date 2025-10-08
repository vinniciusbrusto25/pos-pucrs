var express = require('express');
var router = express.Router();
const { listAll, listOne, save, deleteOne } = require('../controllers/postcards');

router.get('/', (req, res) => {
    listAll(res);
});

router.get('/:id', (req, res) => {
    listOne(req, res);
});

router.post('/', (req, res) => {
    save(req, res);
});

router.delete('/:id', (req, res) => {
    deleteOne(req, res);
});

module.exports = router;


