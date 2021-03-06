require('dotenv').config()

const http = require('http');
const PORT = process.env.PORT || 8091;

const app = require('./app');
const server = http.createServer(app);

server.listen(PORT);
console.log('Server started and listening on port', PORT);