const assert = require('assert');

const express = require('express');
const app = express();
const port = 3000;

// Database
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'homepage';
const client = new MongoClient(url);

client.connect(err => {
  assert.equal(err, null);
  console.log('Successfully connected to server.');

  const db = client.db(dbName);

  // Controller
  const todosController = {
    collection: db.collection('todos'),

    async get() {
      const todos = await this.collection.find({}).toArray();
      return todos;
    },
  };

  // Endpoints
  app.get('/api/todos', async (_, res) => {
    res.set('access-control-allow-origin', 'http://localhost:8080');
    res.json(await todosController.get());
  });

  app.post('/api/todos', async (req, res) => {
    // TODO: Look up CORS for POST requests.
    res.set('access-control-allow-origin', 'http://localhost:8080');
    console.log(req.body);
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
});
