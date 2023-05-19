const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/login', (req, res) => {
  res.send('hello')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})