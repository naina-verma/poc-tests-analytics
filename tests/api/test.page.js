
'use strict';
var frisby = require("frisby");
var token = process.env['OSIO_TOKEN']
/* frisby.globalSetup is used by all REST requests */
frisby.globalSetup({
  request: {
    headers: { 'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Authorization' : 'Bearer ' +token             }
           }
});
var TestPage = function () {  
};
TestPage.prototype  = Object.create({}, {
  GetComponentAnalysis:   {
    value: function (parameter)
    {
        var workitems = frisby.create('Should be successful in connecting to REST API - endpoint');
        workitems.get("https://recommender.api.openshift.io/api/v1/component-analyses/" + parameter).expectStatus(200)
        return workitems;
     }
  },
});

module.exports = TestPage;
