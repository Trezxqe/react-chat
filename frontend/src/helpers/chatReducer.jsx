const initState = {
  username: null,
  id: null,
  usersList: [],
  currentRoomName: null,
  currentRoomSize: null,
  currentRoomChatHistory: [],
};

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case 'user/login':
      return {
        ...state,
        username: action.payload.username,
        id: action.payload.id,
      };
    case 'chat/getUsers':
      return {
        ...state,
        currentRoomSize: action.payload.usersList.length,
        usersList: action.payload.usersList,
      };
    case 'chat/setData':
      return {
        ...state,
        currentRoomName: action.payload.roomName,
        currentRoomChatHistory: action.payload.chatHistory,
      };
    case 'chat/setMessage':
      return {
        ...state,
        currentRoomChatHistory: [
          ...state.currentRoomChatHistory,
          action.payload.message,
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
