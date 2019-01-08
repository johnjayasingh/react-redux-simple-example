import { combineReducers } from "redux";

const todos = (state = {}, action) => {
  return {
    profile: {
      name: "new john"
    }
  };
};

export default combineReducers({
  todos
});
