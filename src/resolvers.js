const { toIso8601Date } = require('./transforms');
const { toSongFilter } = require('./filters');

const resolvers = {
  Query: {
    song: async (root, { id }, context) => {
      const { Song } = await context.getModel();
      return Song.findById(id);
    },
    songs: async (root, { filter }, context) => {
      const { Song } = await context.getModel();
      const where = filter ? toSongFilter(filter) : {};
      return Song.find(where);
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
  Song: {
    releaseDate: ({ releaseDate }) => toIso8601Date(releaseDate),
    artists: async (song, _, context) => {
      const { Artist } = await context.getModel();
      return Artist.find({'_id': { $in: song.artists }});
    },
    album: async (song, _, context) => {
      const { Album } = await context.getModel();
      return Album.findById(song.album);
    }
  },
  Album: {
    releaseDate: ({ releaseDate }) => toIso8601Date(releaseDate),
  },
};

exports.resolvers = resolvers;
