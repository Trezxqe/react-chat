import Room from './room.js';
import User from './user.js';

class Dialog extends Room {
  constructor(dialogProfile, roomName) {
    super(dialogProfile);
    this._usersList = [
      new User(dialogProfile.client),
      new User(dialogProfile.recipient),
    ];
    this.roomName = roomName;
    this.isPrivate = true;
  }
  getDialogDataSimple() {
    return {
      roomHistory: this._roomHistory,
      roomName: this.roomName,
      usersList: this._usersList,
      roomType: this.roomType,
    };
  }
  getSocketIds() {
    return this._usersList.map((user) => user.socketId);
  }
}

export default Dialog;
