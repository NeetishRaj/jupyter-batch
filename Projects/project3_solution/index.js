const express = require('express')
const app = express()
const body_parser = require('body-parser')
const port = 3000

const fs = require('fs');

app.use(body_parser.json());

app.get('/users', (req, res) => {
    //const db_data = require('./users_db.json');
    // res.send(db_data);

    // or

    const read_stream = fs.createReadStream('./users_db.json')
    res.send(read_stream);
})

app.get('/users/:user_id', (req, res) => {
    const user_data = require('./users_db.json');

    const user = user_data.users
        .find(user => user.id === parseInt(req.params.user_id))
    res.send(user);
})


app.post('/users', (req, res) => {
    // Fetch the list of existing users.
    const user_data = require('./users_db.json');

    // append the new user to the users array with appropriate id
    const user = req.body;
    user.id = 100;
    user_data.users.push(user)

    // Stringify the JSON and write it to users_db.json file to save
    const writer = fs.createWriteStream('./users_db.json');
    writer.write(JSON.stringify(user_data, null, 4));

    // return 201 successfully created
    res.sendStatus(201);
})


app.put('/users/:user_id', (req, res) => {
    // Fetch the list of existing users.
    const user_data = require('./users_db.json');

    //  get the updated user data
    const updated_user = req.body;

    // replace the old user data with new user item
    const index_of_user = user_data.users
        .findIndex(user => user.id === parseInt(req.params.user_id));

    if(index_of_user < 0) {
        res.send(404)
    }

    user_data.users[index_of_user] = updated_user;


    // Stringify the JSON and write it to users_db.json file to save
    const writer = fs.createWriteStream('./users_db.json');
    writer.write(JSON.stringify(user_data, null, 4));

    // return 204 successfully updated
    res.sendStatus(200);
})

app.delete('/users/:user_id', (req, res) => {
    // Fetch the list of existing users.
    const user_data = require('./users_db.json');

    //  delete the user with specified id
    const deleted_user_array = user_data.users
        .filter(u => u.id !== parseInt(req.params.user_id));

    user_data.users = deleted_user_array;

    // Stringify the JSON and write it to users_db.json file to save
    const writer = fs.createWriteStream('./users_db.json');
    writer.write(JSON.stringify(user_data, null, 4));

    // return 204 successfully updated
    res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})