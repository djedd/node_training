const { makeExecutableSchema } = require("graphql-tools");
const baseTypeDefs = require("./types/index");
const userTypeDefs = require("./types/user");
const mergedResolvers = require("./resolvers/index");

const schema = makeExecutableSchema({
  typeDefs: [baseTypeDefs, userTypeDefs],
  resolvers: mergedResolvers,
});

module.exports = schema;
