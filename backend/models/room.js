class Room {
  constructor(name, isPrivate) {
    this.name = name;
    this.isPrivate = isPrivate;
    this._chatHistory = [];
    this._usersList = [];
  }
  connect(user) {
    this._usersList.push(user);
  }
  disconnect(user) {
    this._usersList = this._usersList.filter((roomer) => roomer.id !== user.id);
  }
  get usersList() {
    return this._usersList;
  }
  addMessage(username, message, socketId, date) {
    const messageId = this._chatHistory.length;
    this._chatHistory.push({ messageId, username, message, date, socketId });
    return messageId;
  }
  get chatData() {
    return { history: this._chatHistory, name: this.name };
  }
}

export default Room;
