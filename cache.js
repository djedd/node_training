const NodeCache = require("node-cache");
// The stdTTL parameter sets a default "time to live" in seconds for each cache entry
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

module.exports = myCache;
