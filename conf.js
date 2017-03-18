// conf.js
exports.config = {
  sauceUser: '$SAUCE_USERNAME',
  sauceKey: '$SAUCE_ACCESSKEY',

  //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'features/*.feature'
  ],
  
  

  // restartBrowserBetweenTests: true,

  onPrepare: function(){
      var caps = browser.getCapabilities()
  },

  multiCapabilities: [{
    browserName: 'firefox',
    version: '47',
    platform: 'Windows 7',
    name: "firefox-tests",
    shardTestFiles: false,
    maxInstances: 25
  }, {
    browserName: 'chrome',
    version: '41',
    platform: 'Windows 7',
    name: "chrome-tests",
    shardTestFiles: false,
    maxInstances: 25
  }],

  resultJsonOutputFile: 'report.json',
  
  
  
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'json'
  },

  onComplete: function() {

    var printSessionId = function(jobName){
      browser.getSession().then(function(session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    }
    printSessionId("Insert Job Name Here");
  }
}
