const express = require('express');
const next = require('next');
const cors =require("cors");
//GraphQL
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');


// resolvers
const { portfolioResolvers } = require('./graphql/resolvers');
// types
const { portfolioTypes } = require('./graphql/types');


//port
const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();


app.prepare().then(() => {
  const server = express();
 // Construct a schema, using GRAPHQL schema language
 const schema = buildSchema(`
 ${portfolioTypes}

 type Query {
   hello: String
   portfolio(id:ID):Portfolio
   portfolios:[Portfolio]
 }
`);

// The root provides a resolver for each API endpoint
const root = {
    ...portfolioResolvers
}
// inform the server about GraphQL "/graphql" will be handled with graphql implementation
server.use("/graphql",graphqlHTTP({
schema,
rootValue:root,
graphiql:true




}))

server.use(cors());
  server.all('*', (req, res) => {
    return handle(req, res);
  })

  
  server.listen(PORT, (err) => {
    if (err) { console.log(err); }
    console.log(`> Ready on port ${PORT}`)
  })
})