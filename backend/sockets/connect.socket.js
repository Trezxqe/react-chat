const connectSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('new connection, id', socket.id);
  });
};

export default connectSocket;
