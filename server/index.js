const express = require('express');
const next = require('next');
const cors =require("cors");
//port
const PORT = parseInt(process.env.PORT,10) || 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

// Connect to DB
const db = require('./database')
db.connect();


app.prepare().then(() => {
  const server = express();

  require('./middlewares').init(server, db);


 const apolloServer = require('./graphql').createApolloServer();
apolloServer.applyMiddleware({app: server})

server.use(cors());
  server.all('*', (req, res) => {
    return handle(req, res);
  })

  
  server.listen(PORT, (err) => {
    if (err) { console.log(err); }
    console.log(`> Ready on port ${PORT}`)
  })
})