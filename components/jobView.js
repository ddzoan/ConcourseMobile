const Job = require('./job');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class JobView extends Component {
  render() {
    data = {
       "name":"build-base-docker-image",
       "url":"/pipelines/main/jobs/build-base-docker-image",
       "next_build":null,
       "finished_build":{
          "id":5355,
          "name":"25",
          "status":"succeeded",
          "job_name":"build-base-docker-image",
          "url":"/pipelines/main/jobs/build-base-docker-image/builds/25",
          "api_url":"/api/v1/builds/5355",
          "pipeline_name":"main",
          "start_time":1462317364,
          "end_time":1462318330
       },
       "inputs":[
          {
             "name":"ci",
             "resource":"ci",
             "trigger":false
          },
          {
             "name":"apps-manager-base-dockerfile",
             "resource":"apps-manager-base-dockerfile",
             "trigger":true
          },
          {
             "name":"ubuntu-14.04",
             "resource":"ubuntu-14.04",
             "trigger":true
          }
       ],
       "outputs":[
          {
             "name":"apps-manager-js-base-docker-image",
             "resource":"apps-manager-js-base-docker-image"
          }
       ],
       "groups":[
          "docker"
       ]
    };

    return (
      <View>
        <Job name={data.name}/>
      </View>
    )
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

module.exports = JobView;
