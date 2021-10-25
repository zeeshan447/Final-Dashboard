export const addCandidateReducer = (state = { reloadPage: false }, action) => {
  if (action.type === "RELOAD") {
    return { reloadPage: true };
  }
  if (action.type === "DEFAULT") {
    return { reloadPage: false };
  }
  return state;
};
