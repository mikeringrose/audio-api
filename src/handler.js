const { ApolloServer } = require('apollo-server-lambda');
const { schema } = require('./schema');
const { resolvers } = require('./resolvers');
const Context = require('./context');
const db = require('./db');

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ event, context }) => new Context(event, context, db),
  playground: true,
  introspection: true,
});

exports.graphql = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
