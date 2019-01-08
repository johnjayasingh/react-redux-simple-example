import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import PropTypes from "prop-types";

export class ProfileComponent extends Component {
  render() {
    const { profile } = this.props;
    return (
      <View>
        <Text>{JSON.stringify(profile)}</Text>
      </View>
    );
  }
}

ProfileComponent.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileComponent;
