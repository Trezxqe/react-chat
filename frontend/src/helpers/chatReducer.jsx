import * as type from './actionTypes.jsx';
import filterActiveDialogs from './other/filterActiveDialogs.jsx';

const initState = {
  username: null,
  userId: null,
  usersList: [],
  roomType: null,
  currentRoomName: null,
  currentRoomSize: null,
  currentRoomHistory: [],
  activeDialogs: [],
};

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case type.USER_CONNECT:
      return {
        ...state,
        username: action.payload.username,
        userId: action.payload.userId,
      };
    case type.USER_JOIN_ROOM:
      return {
        ...state,
        currentRoomName: action.payload.roomName,
        currentRoomHistory: action.payload.roomHistory,
        currentRoomSize: action.payload.usersList.length,
        usersList: action.payload.usersList,
        roomType: action.payload.roomType,
      };
    case type.ROOM_ACTIVE_USERS:
      return {
        ...state,
        currentRoomSize: action.payload.usersList.length,
        usersList: action.payload.usersList,
      };
    case type.ROOM_NEW_MESSAGE:
      return {
        ...state,
        currentRoomHistory: [
          ...state.currentRoomHistory,
          action.payload.messageData,
        ],
      };
    case type.DIALOG_NEW_MESSAGE:
      return {
        ...state,
        activeDialogs: filterActiveDialogs([...state.activeDialogs], action.payload),
      };
    default:
      return state;
  }
};

export default chatReducer;
