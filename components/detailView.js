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
        <Text style={styles.time}>started {start_time}</Text>
        <Text style={styles.time}>ended {end_time}</Text>
        <Text style={styles.time}>duration {end_time - start_time}</Text>

        <View style={styles.inputs}>
          <Text style={styles.textHeader}>Inputs</Text>
          <View>{inputs}</View>
        </View>

        <Text style={styles.textHeader}>Outputs</Text>
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
    margin: 5,
    padding: 5
  },
  header: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 14,
    fontWeight: "700",
    padding: 10
  },
  textHeader: {
    margin: 5,
    padding: 5
  },
  inputs: {
    backgroundColor: '#34495E'
  },
  input: {
    backgroundColor: '#5D6D7E',
    marginVertical: 1,
    padding: 10
  }
});

module.exports = DetailView;
