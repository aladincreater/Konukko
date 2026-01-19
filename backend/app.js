const express = require('express');
const mongoose = require('mongoose');
const port = 3000;

const app = express();
mongoose.connect('mongodb://localhost:27017/Ecommerce')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Database connection error:', err);
});
const routes = require('./routes/index');
app.use(express.json());
app.use('/v1', routes);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
