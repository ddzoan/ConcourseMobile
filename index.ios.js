/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 const JobView = require('./components/jobView');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ConcourseMobile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <JobView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#273747',
  }
});

AppRegistry.registerComponent('ConcourseMobile', () => ConcourseMobile);
