const express = require('express')
const app = express()
const port = process.env.PORT_API ?? 3000

app.get('/home', (req, res) => {
  res.send('--> Home!')
})

app.get('/about', (req, res) => {
  res.send('--> About!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
