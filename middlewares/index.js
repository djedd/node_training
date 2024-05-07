const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const applyMiddlewares = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(helmet());
};

module.exports = {
  applyMiddlewares,
};
