import User from '../models/user.js';

const createProfile = (req, socket) => {
  const userProfile = {
    username: req.username,
    socketId: socket.id,
  };
  const newUser = new User(userProfile);
  socket.emit('user:createProfile', {
    message: 'Profile create successfull',
    error: false,
  });
  return newUser;
};

export default createProfile;
