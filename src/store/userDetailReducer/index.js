const initialState = {
  userDetails: [],
};

export const userDetailReducer = (
  state = initialState.userDetails,
  { type, payload }
) => {
  switch (type) {
    case "USER_DETAILS":
      return { ...state, userDetails: payload };
    default:
      return state;
  }
};
