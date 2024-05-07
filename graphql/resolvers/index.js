const { merge } = require("lodash");
const userResolvers = require("./userResolvers");

const baseResolvers = {
  Query: {
    // base resolvers o empty resolvers
    _: () => true,
  },
  Mutation: {
    _: () => true,
  },
};

const mergedResolvers = merge(userResolvers, baseResolvers);

module.exports = mergedResolvers;
