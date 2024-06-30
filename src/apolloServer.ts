import { ApolloServer } from 'apollo-server-express';
import schema  from './schema/schema';
import { resolvers } from './resolvers/resolver';

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

export default server;
