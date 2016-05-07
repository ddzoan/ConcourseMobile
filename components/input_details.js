import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const BuildHeader = require('./build_header');
const Icon = require('react-native-vector-icons/FontAwesome');

class InputDetails extends Component {
  render() {
    // const {input} = this.props;
    const builds = require('../sample_builds_response.json');
    const resources = require('../sample_resources_data.json');
    const input = resources.inputs[1];
    const latestBuild = builds[0];

    const metadata = input.metadata.map((line, i) => {
      return (
        <View key={i} style={styles.metadata}>
          <Text style={[styles.details, styles.name]}>{line.name}</Text>
          <Text style={[styles.details, styles.value]}>{line.value}</Text>
        </View>
      )
    })

    return (
      <View>
        <BuildHeader job_name={latestBuild.job_name} build_number={latestBuild.name} status={latestBuild.status} />
        <View style={styles.jobBar}>
          <Text style={styles.input}>{input.name}</Text>
          <Icon style={styles.jobBarIcon} name="check" size={16} color="white" />
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.details}>ref {input.version.ref}</Text>
          <Text style={styles.details}>{input.first_occurrence ? '' : 'using version of resource found in cache'}</Text>
          {metadata}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  metadata: {
    flexDirection: 'row'
  },
  name: {
    flex: 2,
    paddingVertical: 0
  },
  value: {
    flex: 4,
    paddingVertical: 0
  },
  jobBar: {
    backgroundColor: '#5D6D7E',
    flexDirection: 'row',
    height: 44,
    marginBottom: 4,
    alignItems: 'center',
  },
  input: {
    color: 'white',
    flex: 1,
    paddingLeft: 10
  },
  jobBarIcon: {
    paddingRight: 10,
    flex: 0,
    width: 44,
    height: 44,
    color: 'white',
    padding: 14,
    backgroundColor: '#2FCC71'
  },
  details: {
    color: 'white',
    paddingVertical: 5
  }
});

module.exports = InputDetails;
