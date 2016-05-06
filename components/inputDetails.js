JobHeader = require('./jobHeader')

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class DetailInput extends Component {
  render() {
    const {input} = this.props;
    const builds = require('../sample_builds_response.json');
    const resources = require('../sample_resources_data.json');
    const latestBuild = builds[0];

    return (
      <View>
      <JobHeader job_name={latestBuild.job_name} build_number={latestBuild.name} status={latestBuild.status} />
        <Text style={styles.input}>{input.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#5D6D7E',
    color: 'white'
  }
});

module.exports = DetailInput;
