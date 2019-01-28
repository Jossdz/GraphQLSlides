const { ApolloServer, gql } = require("apollo-server-lambda");

const schema = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    }
  }
};

const server = new ApolloServer({
  schema,
  resolvers
});

exports.handler = server.createHandler();