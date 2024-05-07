const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(id: ID!, input: UpdateUserInput): User
  }

  input CreateUserInput {
    username: String!
    email: String!
  }

  input UpdateUserInput {
    username: String
    email: String
  }
`;

module.exports = userTypeDefs;
