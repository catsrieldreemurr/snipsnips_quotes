const express = require("express");
const api = require("./routes/api")

const app = express()

app.use("/api_v1", api)

app.listen(3000)