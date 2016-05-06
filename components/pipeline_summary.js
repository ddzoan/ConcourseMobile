const Icon = require('react-native-vector-icons/FontAwesome');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

class Pipeline extends Component {
  constructor(props, context) {
    super(props, context);


  }

  _onPressPauseButton() {
    console.log('pressed');
  }

  render() {
    const {pipeline, jobs} = this.props;

    const pauseButton = <Icon name="pause" size={20} color="white" />;
    const playButton = <Icon name="play" size={20} color="white" />;

    return (
      <View style={styles.bar}>
        <Text style={styles.pipeline}>{pipeline.name}</Text>
        <TouchableHighlight onPress={this._onPressPauseButton}>
          <Text style={[styles.button, pipeline.paused ? styles.paused : styles.play]}>{pipeline.paused ? playButton : pauseButton}</Text>
        </TouchableHighlight>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  paused: {
    backgroundColor: '#3498DB'
  },
  play: {
    backgroundColor: '#5D6D7E'
  }
});

module.exports = PipelineSummary;
