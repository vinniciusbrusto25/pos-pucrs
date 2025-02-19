import express from 'express';

const app = express();
const port = 5002;

//Rota principal
app.get('/', (req, res) => {
  res.send('Olá mundo com Express');
});

app.get('/rota', (req, res) => {
    let numeroRota = req.query.numeroRota;
    res.send(`ROTA_${numeroRota} - Olá mundo | Express `);
  });

  app.get('/vinicius', (req, res) => {
    let numeroRota = req.query.numeroRota;
    res.send(`ROTA_ - Olá Vinicius | Express `);
  });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});