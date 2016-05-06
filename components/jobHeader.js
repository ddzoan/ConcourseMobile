import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class JobHeader extends Component {
  render() {
    const {job_name, build_number, buttonLink} = this.props;

    return (
      <View style={styles.page}>
        <Text style={styles.header}>{job_name} #{build_number}</Text>
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

module.exports = JobHeader;
