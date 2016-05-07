/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
const PipelineSummary = require('./components/pipeline_summary');
const JobBuildSummary = require('./components/job_build_summary');
const InputDetails = require('./components/input_details');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ActivityIndicatorIOS,
  StatusBar
} from 'react-native';

import JsonFetcher from './api/json_fetcher';

class TestView extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pipelines: null
    };

    this.fetcher = new JsonFetcher();

    this.fetcher.fetchPipelines().then((resource) => {
      resource.json().then((pipelines) => {
        this.setState({pipelines});
      });
    })
  }

  render() {
    if(this.state.pipelines) {
      return (
        <View style={styles.container}>
          <PipelineSummary navigator={this.props.navigator} pipelines={this.state.pipelines}/>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicatorIOS
            animating={true}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
        </View>
      );
    }
  }
}

class ConcourseMobile extends Component {
  render() {
    const inputs = require('./sample_resources_data').inputs;
    return (
      // <View style={styles.container}>
      //   <PipelineSummary pipelines={this.state.pipelines}/>
      // </View>
      <NavigatorIOS
        style={[styles.container]}
        initialRoute={{
          title: 'Pipeline Summary',
          component: TestView,
        }}
        itemWrapperStyle={styles.container}
        barTintColor="#19252F"
        titleTextColor="white"
        translucent={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273747',
    flex: 1
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

StatusBar.setBarStyle('light-content', true);

AppRegistry.registerComponent('ConcourseMobile', () => ConcourseMobile);
