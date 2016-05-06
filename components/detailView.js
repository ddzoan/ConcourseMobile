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
        <Text style={styles.time}>{start_time}</Text>
        <Text style={styles.time}>{end_time}</Text>
        <Text style={styles.time}>{end_time - start_time}</Text>

        <Text>Inputs</Text>
        <View>{inputs}</View>

        <Text>Outputs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#273747',
  },
  time: {
    color: 'white',
  },
  header: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 14,
    fontWeight: "700",
    padding: 10
  },
  input: {
    backgroundColor: '#5D6D7E',
    margin: 5,
    padding: 5
  }
});

module.exports = DetailView;
