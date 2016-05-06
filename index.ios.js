/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
const PipelineSummary = require('./components/pipeline_summary');
const InputDetails = require('./components/input_details');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ConcourseMobile extends Component {
  render() {
    const inputs = require('./sample_resources_data').inputs;
    return (
      <View style={styles.container}>
        <InputDetails input={inputs[0]}/>
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
