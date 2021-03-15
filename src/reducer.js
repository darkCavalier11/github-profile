export const initialState = {
  user: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS_LOGIN":
      return {
        ...state,
        user: [...state.user, action.user],
      };
    case "SUCCESS_LOGOUT":
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
};

export default reducer;
