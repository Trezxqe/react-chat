class Room {
  constructor(roomProfile) {
    this.roomName = roomProfile.roomName;
    this.isPrivate = roomProfile.isPrivate;
    this._roomHistory = [];
    this._usersList = [];
    this.roomType = roomProfile.roomType;
  }
  connect(user) {
    this._usersList.push(user);
  }
  disconnect(socketId) {
    this._usersList = this._usersList.filter(
      (roomer) => roomer.socketId !== socketId,
    );
  }
  leave(socketId) {
    return this._usersList.find((roomer) => roomer.socketId === socketId);
  }
  getUsersList() {
    return this._usersList;
  }
  addMessage(data) {
    const { username, message, date, socketId } = data;
    const messageId = this._roomHistory.length;
    this._roomHistory.push({ messageId, username, message, date, socketId });
    return messageId;
  }
  getRoomData() {
    return {
      roomHistory: this._roomHistory,
      roomName: this.roomName,
      usersList: this._usersList,
      roomType: this.roomType,
    };
  }
}

export default Room;
