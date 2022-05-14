//Import database
require("./database");


//Import express
const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");

//Import morgan
const morgan = require("morgan");

//Import CORS
const cors = require("cors");

//Socket.io

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    }
});

io.on("connection", (socket) => {
    console.log("New client connected: ", socket.id);
    socket.join('admission');

    socket.on("join_room", (data) => {
        socket.join(data.room);
        console.log(`User ${socket.id} joined ${data.room}`);
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data)
    })

    socket.on("send_ticket", (() => {
        socket.broadcast.emit("receive_ticket")
    }))

    socket.on("disconnect", () => {
        console.log("Client disconnected", socket.id);
        })
    });

//Apply JSON reading, CORS policy and morgan
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000"}));
app.use(morgan("tiny"));

//Apply routes
app.use("/api", require("./routes/routes"));

server.listen(8080, () => {
  console.log('listening on *:8080');
});