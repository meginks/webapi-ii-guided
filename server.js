const express = require('express');

const hubsRouter = require('./hubs/hubs-router.js');

// Initialize server
const server = express();
//Middleware
server.use(express.json());
//Sanity check
server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

// Routers 
server.use('/api/hubs', hubsRouter);

module.exports = server 