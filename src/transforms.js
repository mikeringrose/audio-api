const moment = require('moment');

const toIso8601Date = (millis) => moment(millis).format('YYYY-MM-DD');

module.exports = { toIso8601Date };
