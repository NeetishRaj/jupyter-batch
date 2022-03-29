const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// use() functions are used to add middleware between the request and response.
app.use(express.static('client'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})