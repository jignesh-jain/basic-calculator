const express = require("express");
const app = express();
const server = require('http').createServer(app);
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const serveStatic = require('serve-static')
const Calculation = require("./model/Calculation");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const io = require('socket.io')(server);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("Connected to Database");
  });

// Cors Middleware
app.use(cors());

// Stattic Folder Middleware


// Get Recent 10 Calculations

app.get("/calculations", (req, res) => {
  let sortBy = "createdAt";
  let order = "desc";
  Calculation.find()
    .sort([[sortBy, order]])
    .limit(10)
    .exec((err, calculation) => {
      if (err) {
        return res.status(400).json({
          error: "Calculations Not Found",
        });
      } else {
        return res.json(calculation);
      }
    });
});

// Add a calculation
app.post("/calculations", (req, res) => {
  const calculation = new Calculation({
    expression: req.body.expression,
  });
  calculation.save().then((calculation) => {
    if (!calculation) {
      return res.status(400).json({
        error: "Calculation Error",
      });
    } else {
      return res.json(calculation);
    }
  });
});

io.on('connection', (socket) => {
   console.log("Connected to a user");
   let messageServer = "Hello from Server";
   socket.on('updatelist' , (msg) => {
     console.log(msg);
    io.emit('newupdatedlist',messageServer)
   })
  });

  if (process.env.NODE_ENV === "production") {
    // Set Static Folder
    app.use(express.static("client/dist"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    });
  }

server.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});


