/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import styles from "./src/styles";
import Profile from "./src/components/profile";
import { INITIAL_STATE } from "./src/constants";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./src/reducers";
const store = createStore(rootReducer);
export default class App extends Component {
  state = INITIAL_STATE;

  render() {
    const { profile } = this.state;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Profile profile={profile} />
        </View>
      </Provider>
    );
  }
}
