const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const uri = process.env.MONGO_URL;

let conn = null;
let schema = null;

const init = async (conn) => {
  const ArtistSchema = new Schema({
    name: String,
  });
  const Artist = conn.model('artists', ArtistSchema);

  const AlbumSchema = new Schema({
    title: String,
  });
  const Album = conn.model('albums', AlbumSchema);

  const SongSchema = new Schema({
    name: String,
    duration: Number,
    releaseDate: Date,
    artist: {
      type: ObjectId,
      ref: 'artists',
    },
  })
  const Song = conn.model('songs', SongSchema);

  return { Artist, Album, Song };
}

module.exports = async () => {
  if (conn == null) {
    conn = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
    });
    schema = init(conn);
  }

  return schema;
};
