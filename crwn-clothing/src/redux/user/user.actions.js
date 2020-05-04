//Notice SET_CURRENT_USER which is exact same type as user.reducer.js's SET_CURRENT_USER
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
