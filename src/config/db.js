const mongoose = require("mongoose");
const Grid = require('gridfs-stream');

require("dotenv").config();

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.yeoaway.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
  );

  console.log("Banco conectado com sucesso!")
}

main().catch((err)=>console.log(err));

let gfs;

const conn = mongoose.connection;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

module.exports = { main, gfs };
