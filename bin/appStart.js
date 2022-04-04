const http = require('http');
const env = require('dotenv').config();
const consola = require('consola')


const app = require('../src/app');



const port = process.env.PORT || 6000;
const server = http.createServer(app);
server.listen(port, ()=> consola.info(`Server is running on port ${port}`));