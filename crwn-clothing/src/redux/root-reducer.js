//To combine all the reducers, we need to import a component
import { combineReducers } from "redux";

//importing our userReducer
import userReducer from "./user/user.reducer";

//The imported "userReducer" will get called with "key": "value" pair, key goes to actual reducer. This will fullstate JSON Object.
//KEYS represent indivial slices of states and reducer is the actual reducer we wrote.
export default combineReducers({
  user: userReducer,
});
