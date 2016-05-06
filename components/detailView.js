const DetailSummary = require('./detailSummary');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class DetailView extends Component {
  render() {
    // const {builds} = this.props;
    const builds = require('../sample_builds_response.json');
    const resources = require('../sample_resources_data.json');
    const latestBuild = builds[0];
    const {start_time, end_time} = latestBuild;

    inputs = resources.inputs.map((input) =>{
      return (
        <Text style={styles.input} key={input.version.ref}>
          {input.name}
        </Text>
      );
    });

    return (
      <View style={styles.page}>
        <Text style={styles.header}>{latestBuild.job_name} #{latestBuild.name}</Text>
        <DetailSummary />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#273747',
  },
  header: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 14,
    fontWeight: "700",
    padding: 10
  },
});

module.exports = DetailView;
