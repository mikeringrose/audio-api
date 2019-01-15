const toSongFilter = (filter) => {
  const conditions = [];
  const { name, genres = [] } = filter;
  
  if (name) {
    conditions.push({ 'name': { '$regex': name } });
  }

  if (genres.length) {
    conditions.push({ 'genre': { $in: genres } });
  }

  if (conditions.length == 1) {
    return conditions[0];
  }

  if (conditions.length > 1) {
    return {
      $and: conditions
    }
  }

  return {};
};

module.exports = { toSongFilter };