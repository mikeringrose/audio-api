const { gql } = require('apollo-server-lambda');
const schema = gql`
  type Query {
    artist(id: ID!): Artist
    artists: [Artist]
    album(id: ID!): Album
    albums: [Album]
    song(id: ID!): Song
    songs(filter: SongFilter): [Song]
  }

  type Song {
    id: ID!
    name: String!
    artists: [Artist]!
    album: Album
    duration: Int!
    releaseDate: String!
    url: String!
  }

  type Album {
    id: ID!
    title: String!
    artist: [Artist]!
    releaseDate: String!
  }

  type Artist {
    id: ID!
    name: String!
  }

  input SongFilter {
    title: String
  }
`;

exports.schema = schema;
