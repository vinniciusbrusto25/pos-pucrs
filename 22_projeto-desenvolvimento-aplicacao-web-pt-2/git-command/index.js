const express = require('express')
const port = process.env.PORT || 3001
const app = express()

app.get('/', (req, res) => {
    console.log('New feature');
})

app.get('/feature', (req, res) => {
    console.log('feito na main');
})
app.get('/feature', (req, res) => {
    console.log('New feature 2');
})
app.listen(port, () => {
    console.log(`start listening ${port}`)
})