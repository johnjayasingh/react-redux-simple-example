import { combineReducers } from "redux";
import { INITIAL_STATE } from "../constants";
import { ADD_TODO } from "../action/todo";

const profile = (state = INITIAL_STATE.profile, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        name: action.text
      };
    default:
      return {
        name: `Hello John`
      };
  }
};

export default combineReducers({
  profile
});
