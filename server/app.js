const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", socket => {
  console.log("user connect");

  socket.on("sendMsg", msg => io.comit("updateMsg", msg));
});

module.exports = {
  app,
  server
};
