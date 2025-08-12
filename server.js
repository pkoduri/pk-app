const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Security and performance
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());

// Simple API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from your website!' });
});

// Serve React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Website running on port ${PORT}`);
});