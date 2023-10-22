const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRouter = require('./routes/todoRouter');
require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
})
  .then(() => {
      console.log('MongoDB Connected');
      app.listen(port, () => {
          console.log(`Server started on port ${port}`);
      });
  })
  .catch(err => console.error(err));

app.use('/todo', todoRouter);

