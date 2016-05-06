/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 const JobView = require('./components/jobView');
 const DetailView = require('./components/detailView');

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
        <DetailView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: '#273747',
    flex: 1
  }
});

AppRegistry.registerComponent('ConcourseMobile', () => ConcourseMobile);
