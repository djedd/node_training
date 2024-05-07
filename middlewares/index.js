const bodyParser = require('body-parser');
const cors = require('cors');

const applyMiddlewares = (app) => {
    app.use(cors());
    app.use(bodyParser.json());
};

module.exports = {
    applyMiddlewares,
};