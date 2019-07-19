// make sourcemaps work!
require('source-map-support').install();

module.exports = require("kevm-ganache-core/public-exports.js");
module.exports.version = require("kevm-ganache-core/package.json").version;
module.exports.to = require("kevm-ganache-core/lib/utils/to");
