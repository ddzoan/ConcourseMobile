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

import JsonFetcher from './api/json_fetcher';

class ConcourseMobile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pipelines: []
    };

    this.fetcher = new JsonFetcher();

    this.fetcher.fetchPipelines().then((resource) => {
      resource.json().then((pipelines) => {
        this.setState({pipelines});
      });
    })
  }

  render() {
    const inputs = require('./sample_resources_data').inputs;
    return (
      <View style={styles.container}>
        <PipelineSummary pipelines={this.state.pipelines}/>
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
