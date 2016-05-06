const Icon = require('react-native-vector-icons/FontAwesome');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import JsonFetcher from '../api/json_fetcher';

class Pipeline extends Component {
  constructor(props, context) {
    super(props, context);

    const {pipeline} = this.props;

    this.state = {
      jobs: []
    };

    this.fetcher = new JsonFetcher();
    this.fetcher.fetchJobs(pipeline.name).then((jobsResource) => {
      jobsResource.json().then((jobsJson) => {
        console.log(jobsJson);
        this.setState({jobs: jobsJson});
      });
    });
  }

  _onPressPauseButton() {
    console.log('pressed');
  }

  render() {
    const {pipeline} = this.props;

    let jobBars = this.state.jobs.filter((job) => {
      return job.finished_build.status === 'failed'
    }).map((job) => {
      return (
        <View key={job.name} style={styles.jobBar}>
          <Text style={styles.jobName}>{job.name}</Text>
        </View>
      );
    });

    console.log(jobBars);

    const pauseButton = <Icon name="pause" size={16} color="white" />;
    const playButton = <Icon name="play" size={16} color="white" />;

    return (
      <View>
        <View style={styles.bar}>
          <Text style={styles.pipeline}>{pipeline.name}</Text>
          <TouchableHighlight onPress={this._onPressPauseButton}>
            <Text style={[styles.button, pipeline.paused ? styles.paused : styles.play]}>{pipeline.paused ? playButton : pauseButton}</Text>
          </TouchableHighlight>
        </View>
        {jobBars}
      </View>
    );
  }
}

class PipelineSummary extends Component {
  render() {
    const {pipelines} = this.props;
    const content = pipelines.map((pipeline) => {
      return <Pipeline pipeline={pipeline} key={pipeline.url} jobs=''/>
    });

    return (
      <View>
        <Text style={styles.header}>Pipeline Summary</Text>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    height: 44,
    backgroundColor: '#19252F',
    flexDirection: 'row',
    marginTop: 5
  },
  pipeline: {
    flex: 1,
    color: 'white',
    paddingLeft: 10,
    alignSelf: 'center'
  },
  button: {
    flex: 0,
    width: 44,
    height: 44,
    color: 'white',
    padding: 14,
    paddingLeft: 15
  },
  paused: {
    backgroundColor: '#3498DB'
  },
  play: {
    backgroundColor: '#5D6D7E'
  },
  jobBar: {
    flex: 1,
    height: 44,
    marginBottom: 4,
    justifyContent: 'center'
  },
  jobName: {
    color: 'white'
  }
});

module.exports = PipelineSummary;
