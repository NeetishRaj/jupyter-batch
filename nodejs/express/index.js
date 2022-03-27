const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request');

    // Code to create new user in Database
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')

    // Code to update an existing user in Database
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');

    // Code to delete a user in the Database
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});