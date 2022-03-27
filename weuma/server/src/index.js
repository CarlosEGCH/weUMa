//Import database
require("./database");

//Import express
const express = require("express");
const app = express();

//Import morgan
const morgan = require("morgan");

//Import CORS
const cors = require("cors");


//Apply JSON reading, CORS policy and morgan
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000"}));
app.use(morgan("tiny"));

//Apply routes
app.use("/api", require("./routes/routes"));

app.listen(8080);
console.log("Server on port", 8080);