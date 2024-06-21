const express = require("express");
const app = express();
const imageRoutes = require('./routes/imageRoutes');


require("dotenv").config();
require("./config/db.js")

app.use(express.json());
app.use('/images', imageRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
