import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import PropTypes from "prop-types";

export class ProfileComponent extends Component {
  constructor() {
    super();
    this.onChange = this._handleOnChange.bind(this);
  }

  _handleOnChange(text) {
    console.log("handled");
    this.props.loadProfile(text);
    return true;
  }

  render() {
    const { profile } = this.props;
    const { name } = profile;
    return (
      <View>
        <TextInput value={name} onChangeText={this.onChange} />
        <Text>{name}</Text>
      </View>
    );
  }
}

ProfileComponent.propTypes = {
  profile: PropTypes.object.isRequired,
  loadProfile: PropTypes.func.isRequired
};

export default ProfileComponent;
