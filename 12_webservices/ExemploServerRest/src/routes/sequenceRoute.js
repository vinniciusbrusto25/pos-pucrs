const SequenceRoute = require('../controllers/sequenceController');

module.exports = (app) => {
    app.post('/sequence', SequenceRoute.post);
    app.put('/sequence', SequenceRoute.put);
    app.delete('/sequence', SequenceRoute.delete);
    app.get('/sequence', SequenceRoute.get);
    app.get('/sequence/:id', SequenceRoute.getById);
};