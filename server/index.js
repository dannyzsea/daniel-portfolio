const express = require('express');
const next = require('next');
const cors =require("cors");
const { ApolloServer, gql } = require('apollo-server-express');


// resolvers
const { portfolioQueries, portfolioMutations } = require('./graphql/resolvers');
// types
const { portfolioTypes } = require('./graphql/types');


//port
const PORT = parseInt(process.env.PORT,10) || 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();


app.prepare().then(() => {
  const server = express();
 // Construct a schema, using GRAPHQL schema language
 //Query is used to fetch data


  const typeDefs = gql(`
      ${portfolioTypes}
      type Query {
   hello: String
   portfolio(id:ID):Portfolio
   portfolios:[Portfolio]
 }
 type Mutation{
   createPortfolio(input:PortfolioInput):Portfolio
   updatePortfolio(id:ID,input:PortfolioInput):Portfolio

 }
`);

// The root provides a resolver for each API endpoint
const resolvers = {
  Query:{
   ...portfolioQueries
  },
  Mutation:{
      ...portfolioMutations
  }
}
// inform the server about GraphQL "/graphql" will be handled with graphql implementation
const apolloServer = new ApolloServer({typeDefs, resolvers})
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