
const express = require('express');


const app = express();
const connectDB=require("./config/db.config");
connectDB();
app.use(express.json())
app.use('/users', require('./routes/users'));
app.use('/profile', require('./routes/profile'));
app.use('/posts', require('./routes/posts'));
app.use('/auth',require('./routes/auth'));
app.get('/', (req, res) => {
  res.status(200).json('Hello World!');
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080');
});