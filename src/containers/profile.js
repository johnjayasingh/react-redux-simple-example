import { connect } from "react-redux";
import ProfileComponent from "../components/profile";
import { addTodo } from "../action/todo";

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    loadProfile: text => dispatch(addTodo(text))
  };
};
const Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);

export default Profile;
