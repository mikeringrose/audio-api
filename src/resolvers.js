const resolvers = {
  Query: {
    song: async (root, { id }, context) => {
      const { Song } = await context.getModel();
      return Song.findById(id).populate('artist');
    },
    songs: async (root, { filter }, context) => {
      const { Song } = await context.getModel();
      return Song.find();
    },
    artist: async (root, { id }, context) => {
      const { Artist } = await context.getModel();
      return Artist.findById(id);
    },    
    artists: async (root, { filter }, context) => {
      const { Artist } = await context.getModel();
      return Artist.find();
    }
  },
};

exports.resolvers = resolvers;
