/**
 * POC test for ALMighty REST API 
 * See: http://frisbyjs.com/
 * @author naina-verma
 *
 * Prerequisites:
 * npm install --save-dev frisby
 * npm install -g jasmine-node
 * jasmine-node test1.spec.js  --config targetURL https://recommender.api.openshift.io/api/v1/
 *
 * Run by: jasmine-node <script name>
 *
 * TODO - Generate login token during test 
 */

'use strict';

var frisby = require("frisby");
var testREST = require('./apiCalls');
describe('testREST page', function () {
  var page, browserMode;
  beforeEach(function () {
   page = new testREST();
  });

  it('Show CVE error in API. :: maven/commons-collections:commons-collections/3.2.1', function() {
     var response=page.GetComponentAnalysis('maven/commons-collections:commons-collections/3.2.1')  
     response.inspectJSON()
     .afterJSON(function (body) {
     expect(body.result.recommendation["component-analyses"].cve[0].cvss).toMatch('7.5')
     expect(body.result.recommendation["component-analyses"].cve[0].id).toMatch('CVE-2015-6420')
    })
    response.toss(); 
  });


  it('Show CVE error in API for "commons-fileupload" :: maven/commons-fileupload:commons-fileupload/1.3.1', function() {
     var response=page.GetComponentAnalysis('maven/commons-fileupload:commons-fileupload/1.3.1')  
     response.inspectJSON()
     .afterJSON(function (body) {
     expect(body.result.recommendation["component-analyses"].cve[0].cvss).toMatch('7.5')
     expect(body.result.recommendation["component-analyses"].cve[0].id).toMatch('CVE-2016-1000031')
    })
    response.toss(); 
  });

  it('Show CVE error in API for "org.apache.pdfbox" :: maven/org.apache.pdfbox:pdfbox/1.8.11', function() {
     var response=page.GetComponentAnalysis('maven/org.apache.pdfbox:pdfbox/1.8.11')  
     response.inspectJSON()
     .afterJSON(function (body) {
     expect(body.result.recommendation["component-analyses"].cve[0].cvss).toMatch('7.5')
     expect(body.result.recommendation["component-analyses"].cve[0].id).toMatch('CVE-2016-2175')
    })
    response.toss(); 
  });


  it('Show declared license information for vert.x core" :: maven/io.vertx:vertx-core/3.4.1', function() {
     var expectedReults = ["Apache 2.0","EPL 1.0"]
     var response=page.GetComponentAnalysis('maven/io.vertx:vertx-core/3.4.1')  
     response.inspectJSON()
     .afterJSON(function (body) {
       for (var list=0;list <expectedReults.length ;list++){
            expect(body.result.data[0].version.licenses).toContain(expectedReults[list])
       }
    })
    response.toss(); 
  });

  it('Show declared license information for vert.x Web" :: maven/io.vertx:vertx-web/3.4.1', function() {
     var expectedReults = ["Apache 2.0","EPL 1.0"]
     var response=page.GetComponentAnalysis('maven/io.vertx:vertx-web/3.4.1')  
     response.inspectJSON()
     .afterJSON(function (body) {
     for (var list=0;list <expectedReults.length ;list++){
            expect(body.result.data[0].version.licenses).toContain(expectedReults[list])
       }
    })
    response.toss(); 
  });


  it('Show declared license information for sping core :: maven/org.springframework:spring-core/4.3.3.RELEASE', function() {
     var expectedReults = ["Apache 2.0"]
     var response=page.GetComponentAnalysis('maven/org.springframework:spring-core/4.3.3.RELEASE')  
     response.inspectJSON()
     .afterJSON(function (body) {
      for (var list=0;list <expectedReults.length ;list++){
            expect(body.result.data[0].version.licenses).toContain(expectedReults[list])
       }
    })
    response.toss(); 
  });

});
