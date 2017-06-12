'use strict';
let frisby = require("frisby");
let token = process.env['OSIO_TOKEN']
frisby.globalSetup({
  request: {
    headers: { 'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Authorization' : 'Bearer ' +token             }
           }
});
class apiCalls {

  constructor() {
  }

 GetComponentAnalysis (parameter) {
        var analytics = frisby.create('Connecting to REST API - endpoint');
        analytics.get("https://recommender.api.openshift.io/api/v1/component-analyses/" + parameter).expectStatus(200)
        return analytics;
 
  }
}

module.exports = apiCalls;
