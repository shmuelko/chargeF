const { MONGODB_URI } = require("./app/config/db.js");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

const ordersRoutes = require('./app/components/orders/routes');

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

app.use('/api/v0/orders', ordersRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
