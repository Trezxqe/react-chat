import Room from '../models/room.js';

const db = {
  rooms: {},
  createRoom(roomProfile) {
    const dublCount = this._searchDublicates(roomProfile.roomName);
    if (dublCount) {
      console.log('dublicate', dublCount);
      roomProfile.roomName = this._renameRoom(roomProfile.roomName, dublCount);
    }
    this.rooms[roomProfile.roomName] = new Room(roomProfile);
    return roomProfile.roomName;
  },
  _searchDublicates(roomName) {
    const reg = new RegExp(`${roomName}$|${roomName} \\([\\d]{1,}\\)`, 'gm');
    const duplicates = [];
    for (const key in this.rooms) {
      if (key.search(reg) !== -1) {
        duplicates.push(key);
      }
    }
    return duplicates.length;
  },
  _renameRoom(roomName, num) {
    return `${roomName} (${num})`;
  },
};

export default db;
