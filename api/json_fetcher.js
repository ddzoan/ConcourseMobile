class JsonFetcher {
  constructor(apiUrl) {
    this.apiUrl = 'http://appsmanager.ci.cf-app.com/api/v1';
    this.fullUglyCookie = 'ATC-Authorization=Basic cGl2b3RhbGNmOnJpY2h3aW50ZXIyOQ==';
    this.baseOptions = {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Cookie: this.fullUglyCookie
      }
    };
  }

  fetchPipelines() {
    return fetch(`${this.apiUrl}/pipelines`, this.baseOptions);
  }

  fetchJobs(pipelineName) {
    return fetch(`${this.apiUrl}/pipelines/${pipelineName}/jobs`, this.baseOptions); 
  }

  fetchResources(pipelineName) {
    return fetch(`${this.apiUrl}/pipelines/${pipelineName}/resources`, this.baseOptions); 
  }

  fetchBuilds() {
    return fetch(`${this.apiUrl}/builds`, this.baseOptions);  
  }

  // Job build endpoints
  fetchBuild(buildId) {
    return fetch(`${this.apiUrl}/builds/${buildId}`, this.baseOptions);
  }

  fetchBuildPreparation(buildId) {
    return fetch(`${this.apiUrl}/builds/${buildId}/preparation`, this.baseOptions); 
  }

  fetchBuildPlan(buildId) {
    return fetch(`${this.apiUrl}/builds/${buildId}/plan`, this.baseOptions); 
  }

  fetchBuildResources(buildId) {
    return fetch(`${this.apiUrl}/builds/${buildId}/resources`, this.baseOptions); 
  }

  fetchBuildEvents(buildId) {
    return fetch(`${this.apiUrl}/builds/${buildId}/events`, this.baseOptions); 
  }
}

module.exports = JsonFetcher;