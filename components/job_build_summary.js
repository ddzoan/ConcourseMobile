import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const BuildHeader = require('./build_header');
const JsonFetcher = require('../api/json_fetcher');

class JobBuildSummary extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      build: {
        job_name: '',
        name: '',
        status: ''
      },
      resources: {
        inputs: []
      }
    }

    this.fetcher = new JsonFetcher();

    this.fetcher.fetchBuild(this.props.buildId).then((resource) => {
      resource.json().then((build) => {
        this.setState({build});
      });
    })

    this.fetcher.fetchResources(this.props.pipelineName).then((resource) => {
      resource.json().then((resources) => {
        this.setState({resources});
      });
    })
  }

  render() {
    const {build, resources} = this.state;
    const {start_time, end_time} = build;

    let inputs = resources.inputs.map((input) => {
      return (
        <Text style={styles.input} key={input.version.ref}>
          {input.name}
        </Text>
      );
    });

    const start_diff = new Date(Date.now() - start_time);
    const end_diff = new Date(Date.now() - end_time);
    const duration = new Date(end_time - start_time);
    
    let display_start_date = start_diff.getHours();
    let display_end_date = end_diff.getHours();
    display_duration = duration.getHours();

    return (
      <View>
        <BuildHeader job_name={build.job_name} build_number={build.name} status={build.status} />
        <Text style={styles.time}>started {display_start_date}</Text>
        <Text style={styles.time}>ended {display_end_date}</Text>
        <Text style={styles.time}>duration {display_duration}</Text>

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
  time: {
    color: '#E6E7E8',
    fontFamily: 'Courier',
    fontWeight: '600',
    margin: 5,
    padding: 5
  },
  textHeader: {
    color: '#E6E7E8',
    fontFamily: 'Courier',
    fontWeight: '600',
    margin: 5,
    padding: 5
  },
  inputs: {
    backgroundColor: '#34495E'
  },
  input: {
    color: '#E6E7E8',
    fontFamily: 'Courier',
    fontWeight: '600',
    backgroundColor: '#5D6D7E',
    marginVertical: 1,
    padding: 10
  }
});

module.exports = JobBuildSummary;
