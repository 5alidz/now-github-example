const app = require('express')()

app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/new', (req, res) => {
  res.send('IT WORKS!!!!!!')
})
app.get('/hello', (req, res) => {
  res.send('HELLOOOOOOOOOO')
})
app.listen(3000)
