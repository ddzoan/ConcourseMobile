import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Job extends Component {

  render() {
    const {name} = this.props;

    return (
      <View style={styles.job}>
        <Text style={styles.jobText}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  job: {
    backgroundColor: '#2ECC71',
    padding: 20
  },
  jobText: {
    color: 'white'
  }
});

module.exports = Job;
