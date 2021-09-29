const initState = {
  username: null,
  id: null,
};

const chatReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'user/login':
      return {
        ...state,
        username: action.payload.username,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default chatReducer;
