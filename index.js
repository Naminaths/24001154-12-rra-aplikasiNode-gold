const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON dan urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mengimpor rute
const userRoutes = require('./src/routes/userRoutes');
const itemRoutes = require('./src/routes/itemRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

// Menggunakan rute yang diimpor
app.use('/users', userRoutes);
app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);

// Mengimpor model dan menghubungkan ke database
const db = require('./models');
db.sequelize.sync()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
