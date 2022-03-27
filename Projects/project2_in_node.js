/**
 * PROJECT 2:
 * 
 * 
 * Create a CRUD endpoint for a user using express.js
 * 
 * 
 * 1. We should be able to list all the users on this endpoint
 *  GET: 
 *  localhost:3000/user
 * 
 * 2. We should be able to see individual user 
 *  GET:
 *  localhost:3000/user/1
 * 
 * 3. We should be able to create a new user
 *  POST:
 *  localhost:3000/user
 *  {
 *      "id": 1,
 *      "name": "John Doe",
 *      "age": 75
 *      "department": "Engineering"
 *  }
 * 
 *  4. We should be able to update an existng user with a given id
 *  PUT:
 *  localhost:3000/user/1
 *  {
 *      "id": 1,
 *      "name": "John Doe Foe",
 *      "age": 65
 *      "department": "Engineering"
 *  }
 * 
 *  5. We should be able to delete any existing user.
 *  DELETE:
 *  localhost: 3000/user/1
 * 
 * 
 * 
 * Use users_db.json as your database, and use nodejs fs module to update the content of this file.
 * 
 * JSON.parse() the data
 * modify the users array object
 * JSON.stringify() the data
 * Update the users_db.json file with this new data.
 * 
 */