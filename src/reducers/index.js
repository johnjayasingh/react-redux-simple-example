import { combineReducers } from "redux";
import { INITIAL_STATE } from "../constants";

const profile = (state = INITIAL_STATE, action) => {
  return {
    name: `${action.text || "Hello"}`
  };
};

export default combineReducers({
  profile
});
