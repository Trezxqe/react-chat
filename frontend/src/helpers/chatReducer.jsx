const initState = {
  username: null,
  userId: null,
  usersList: [],
  currentRoomName: null,
  currentRoomSize: null,
  currentRoomHistory: [],
};

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case 'user/connect':
      return {
        ...state,
        username: action.payload.username,
        userId: action.payload.userId,
      };
    case 'user/joinRoom':
      return {
        ...state,
        currentRoomName: action.payload.roomName,
        currentRoomHistory: action.payload.roomHistory,
        currentRoomSize: action.payload.usersList.length,
        usersList: action.payload.usersList,
      };
    case 'room/activeUsers':
      return {
        ...state,
        currentRoomSize: action.payload.usersList.length,
        usersList: action.payload.usersList,
      };
    case 'room/newMessage':
      return {
        ...state,
        currentRoomHistory: [
          ...state.currentRoomHistory,
          action.payload.messageData,
        ],
      };
    case 'chat/joinRoom':
      return {
        ...state,
        currentRoomName: action.payload.name,
        usersList: action.payload.usersList,
        currentRoomSize: action.payload.usersList.length,
        currentRoomChatHistory: action.payload.history,
      };
    default:
      return state;
  }
};

export default chatReducer;
