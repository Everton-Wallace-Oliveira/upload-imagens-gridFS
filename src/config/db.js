const mongoose = require("mongoose");

require("dotenv").config();

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.yeoaway.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
  );

  console.log("Banco conectado com sucesso!")
}

main().catch((err)=>console.log(err));

module.exports = main;