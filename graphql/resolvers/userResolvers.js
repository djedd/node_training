const User = require('../../models/User'); // Asegúrate de tener un modelo de usuario

const userResolvers = {
  Query: {
    // Get all user resolver
    users: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        throw new Error('Error fetching users');
      }
    },
    // Get user by ID resolver
    user: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error('User not found');
        }
        return user;
      } catch (error) {
        throw new Error('Error fetching user');
      }
    },
  },
  Mutation: {
    // Create user mutation
    createUser: async (_, { input }) => {
      try {
        const user = await User.create(input);
        return user;
      } catch (error) {
        throw new Error('Error creating user');
      }
    },
    // Update user mutation
    updateUser: async (_, { id, input }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error('User not found');
        }
        const updatedUser = await user.update(input);
        return updatedUser;
      } catch (error) {
        throw new Error('Error updating user');
      }
    },
  }
};

module.exports = userResolvers;
