import { authConstanst } from "../constants/authconstants";

// const initialState = {
//   isAuthenticated: false,
//   isAuthenticating: false,
// };

// export const userReducer = (state = { isAuthenticated: false }, action) => {
//   switch (action) {
//     case `${authConstanst.USER_LOGIN}_REQUEST`:
//      return isAuthenticated: false
//       break;
//     case `${authConstanst.USER_LOGIN}_SUCCESS`:
//       state = {
//         isAuthenticated: true,
//         isAuthenticating: false,
//       };
//       break;
//     default:
//       return state;
//   }
//   return state;
// };

export const userReducer = (state = { isAuthenticated: false }, action) => {
  if (action.type === "SUCCESS") {
    return { isAuthenticated: true };
  }
  return state;
};
