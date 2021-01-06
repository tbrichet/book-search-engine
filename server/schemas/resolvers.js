const { User, Book} = require('../models')

const resolvers = {
    Query: {
      // get specific user
      me: async (parent, args, context) => {
          if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
              .select('-v -password')

              return userData;
          }
          throw new AuthenticationError('Not logged in');
      }
    }
  };
  
  module.exports = resolvers;

