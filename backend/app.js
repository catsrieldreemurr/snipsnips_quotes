const express = require("express");
const cors = require("cors")

const api = require("./routes/api")
const testRoutes = require("./routes/testing")
const users = require("./routes/users")

const clerkMiddleware = require("@clerk/express")

const db = require("./util/db")

const app = express();

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware.clerkMiddleware())

app.use("/api_v1", api)
app.use("/api_v1/testing", testRoutes)
app.use("/api_v1/users", users)

async function ConnectDB(){
  try{
    await db.authenticate()
    await db.sync();

    console.log("\nSuccessfully Connected to the Database!");
    app.listen(3000)

    console.log("-----------------------------------")
    console.log("Server is running at http://localhost:3000");
    console.log("-----------------------------------")


  } catch ( err ) {
    console.log("Failed Connecting to the Database", err);
  }
}

ConnectDB();