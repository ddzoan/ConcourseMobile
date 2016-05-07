const Icon = require('react-native-vector-icons/FontAwesome');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  ActivityIndicatorIOS
} from 'react-native';

import JobBuildSummary from './job_build_summary';

import JsonFetcher from '../api/json_fetcher';

class Pipeline extends Component {
  constructor(props, context) {
    super(props, context);

    const {pipeline} = this.props;

    this.state = {
      jobs: [],
      paused: pipeline.paused
    };

    this.fetcher = new JsonFetcher();
    this.fetcher.fetchJobs(pipeline.name).then((jobsResource) => {
      jobsResource.json().then((jobsJson) => {
        this.setState({jobs: jobsJson});
      });
    });
  }

  _onPressButton = () => {
    if(this.state.paused){
      this.fetcher.unpause(this.props.pipeline.name).then(() => {
        this.setState({paused: false});
      })
    } else {
      this.fetcher.pause(this.props.pipeline.name).then(() => {
        this.setState({paused: true});
      })
    }
  };

  _onPressJobBar = () => {
    this.props.navigator.push({
      title: this.props.pipeline.name,
      component: JobBuildSummary,
    });
  }

  render() {
    const {pipeline} = this.props;
    const {paused} = this.state;

    let jobBars = this.state.jobs.filter((job) => {
      return job.finished_build.status === 'failed'
    }).map((job) => {
      return (
        <TouchableHighlight onPress={this._onPressJobBar}>
          <View key={job.name} style={styles.jobBar} onPress={this._onPressJobBar}>
            <Icon style={styles.jobBarIcon} name="times" size={16} color="white" /><Text style={styles.jobName}>{job.name}</Text>
          </View>
        </TouchableHighlight>
      );
    });

    let barButton;
    if(this.state.jobs.length > 0) {
      const pauseButton = <Icon name="pause" size={16} color="white" />;
      const playButton = <Icon name="play" size={16} color="white" />;
      barButton = (<TouchableHighlight onPress={this._onPressButton.bind()}>
        <Text style={[styles.button, paused ? styles.paused : styles.play]}>{paused ? playButton : pauseButton}</Text>
      </TouchableHighlight>);
    } else {
      barButton = <ActivityIndicatorIOS
          animating={true}
          style={[styles.centering, {height: 44, paddingRight: 12}]}
          size="small"
        />
    }

    return (
      <View>
        <View style={styles.bar}>
          <Text style={styles.pipeline}>{pipeline.name}</Text>{barButton}
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
      return <Pipeline navigator={this.props.navigator} pipeline={pipeline} key={pipeline.url} jobs=''/>
    });

    return (
      <View style={{flex: 1}}>
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
    marginTop: 5,
    marginBottom: 5
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
    flexDirection: 'row',
    height: 44,
    marginBottom: 4,
    alignItems: 'center',
    backgroundColor: '#E74C3C'
  },
  jobBarIcon: {
    paddingLeft: 10
  },
  jobName: {
    color: 'white',
    paddingLeft: 10
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = PipelineSummary;
