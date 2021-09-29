const initState = {
  username: null,
  id: null,
  usersList: [],
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
        usersList: action.payload.usersList,
      };
    default:
      return state;
  }
};

export default chatReducer;
