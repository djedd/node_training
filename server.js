const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

// middlewares
app.use(cors());
app.use(bodyParser.json());

// basic routes
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de gestión de usuarios!');
});

// start server
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// sync models
sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida exitosamente.');
        
        return sequelize.sync();
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

app.use('/api', userRoutes);
