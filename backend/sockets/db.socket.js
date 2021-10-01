import Dialog from '../models/dialog.js';
import Room from '../models/room.js';

const db = {
  rooms: {},
  dialogs: {},
  createRoom(roomProfile) {
    const dublCount = this._searchDublicates(roomProfile.roomName);
    if (dublCount) {
      roomProfile.roomName = this._rename(roomProfile.roomName, dublCount);
    }
    this.rooms[roomProfile.roomName] = new Room(roomProfile);
    return roomProfile.roomName;
  },
  createDialog(dialogProfile) {
    const { client, recipient } = dialogProfile;
    const existDialog = this._searchDialog(client.username, recipient.username);
    const roomName = `${client.username}---${recipient.username}`;
    if (existDialog) {
      return this.dialogs[existDialog].roomName;
    } else {
      this.dialogs[roomName] = new Dialog(dialogProfile, roomName);
      return this.dialogs[roomName].roomName;
    }
  },
  _searchDublicates(str) {
    const reg = new RegExp(`${str}$|${str} \\([\\d]{1,}\\)`, 'gm');
    const duplicates = [];
    for (const key in this.rooms) {
      if (key.search(reg) !== -1) {
        duplicates.push(key);
      }
    }
    return duplicates.length;
  },
  _rename(name, num) {
    return `${name} (${num})`;
  },
  _searchDialog(clientName, resipName) {
    const clRes = `${clientName}---${resipName}`;
    const resCl = `${resipName}---${clientName}`;
    if (this.dialogs[clRes]) {
      return clRes;
    } else if (this.dialogs[resCl]) {
      return resCl;
    } else {
      return null;
    }
  },
};

export default db;
