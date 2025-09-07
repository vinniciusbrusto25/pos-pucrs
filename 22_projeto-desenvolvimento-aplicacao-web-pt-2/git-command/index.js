require('dotenv').config();
const express = require('express')
const rateLimiter = require('express-rate-limit');
const xss = require('xss-clean');
const pkg = require('pg')
const cool = require('cool-ascii-faces')
const port = process.env.PORT || 3001
const app = express()

const client = new pkg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false }
})

const limiter = rateLimiter.rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 1,
  message: 'Você atingiu o limite máximo de 1 requisição em 24 horas'
})

async function buscarUsuarios() {
  try {
    await client.connect();
    console.log('Conectado ao PostgreSQL ✅');

    const res = await client.query('SELECT * FROM T_USUARIO');
    return res.rows;

  } catch (err) {
    console.error('Erro ao conectar ou consultar:', err);
  } finally {
    await client.end();
    console.log('Conexão encerrada 🚪');
  }
}

app.use(limiter); //assim aplica a todos os endpoints o limitador
app.use(xss());

app.get('/dados', async (req, res) => {
    try {
      const usuarios = await buscarUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuarios' });
    }
})

app.get('/', (req, res) => {
    res.send('<h1 id="title">Hello world</h1>')
})

app.get('/cool', (req, res) => {
    res.send(cool())
})

app.get('/welcome', limiter, (req, res) => {
  res.send('welcome');
})

app.listen(port, () => {
    console.log(`start listening ${port}`)
})