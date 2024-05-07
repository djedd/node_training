require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { applyMiddlewares } = require('./middlewares');
const { connectDB } = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const schema = require('./graphql/schema');

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
applyMiddlewares(app);

// Basic routes
app.get('/', (req, res) => {
  res.send('Welcome to user manage api');
});

// Routes
app.use('/api', userRoutes);

// Apollo configuration
const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req }) // Puedes añadir más configuraciones de contexto aquí si es necesario
});

// Start server
const startServer = async () => {
  try {
      await server.start();
      server.applyMiddleware({ app });
      await connectDB(); // Ensure DB is connected and synced before starting the server
      app.listen(port, () => {
          console.log(`Server running on http://localhost:${port}`);
      });
  } catch (err) {
      console.error('Failed to start the server:', err);
  }
};

startServer();

