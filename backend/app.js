const express = require("express");
const api = require("./routes/api")

const db = require("./util/db")

const app = express()

app.use("/api_v1", api)

async function ConnectDB(){
  try{
    await db.authenticate()
    await db.sync();

    console.log("Successfully Connected to the Database!");
    app.listen(3000)


  } catch ( err ) {
    console.log("Failed Connecting to the Database", err);
  }
}

ConnectDB();