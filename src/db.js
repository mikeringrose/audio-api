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
  const Artist = conn.model('Artist', ArtistSchema);

  const AlbumSchema = new Schema({
    title: String,
    releaseDate: Date,
  });
  const Album = conn.model('Album', AlbumSchema);

  const SongSchema = new Schema({
    name: String,
    duration: Number,
    releaseDate: Date,
    artists: [{
      type: ObjectId,
      ref: 'Artist',
    }],
    album: {
      type: ObjectId,
      ref: 'Album',
    },
    url: String,
  });
  const Song = conn.model('Song', SongSchema);

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
