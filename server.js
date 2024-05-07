require('dotenv').config();
const express = require('express');
const { applyMiddlewares } = require('./middlewares');
const { connectDB } = require('./config/database');
const userRoutes = require('./routes/userRoutes');

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


// Start server
const startServer = async () => {
  try {
      await connectDB(); // Ensure DB is connected and synced before starting the server
      app.listen(port, () => {
          console.log(`Server running on http://localhost:${port}`);
      });
  } catch (err) {
      console.error('Failed to start the server:', err);
  }
};

startServer();

