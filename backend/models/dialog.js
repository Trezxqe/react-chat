import Room from './room.js';

class Dialog extends Room {
  constructor(dialogProfile, roomName) {
    super(dialogProfile);
    this.roomName = roomName;
    this.isPrivate = true;
  }
}

export default Dialog;
