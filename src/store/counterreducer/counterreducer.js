export const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "dashboard") {
    return {
      counter: 0,
    };
  }
  if (action.type === "settings") {
    return { counter: 1 };
  }
  if (action.type === "company" || action.type === "location") {
    return { counter: 2 };
  }
  if (action.type === "jobs") {
    return { counter: 3 };
  }

  return state;
};
