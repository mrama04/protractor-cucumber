//http://chaijs.com/
var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

  //var ptor = protractor.getInstance();

  this.Given(/^I go on "([^"]*)"$/, function (arg1, callback) {
    browser.driver.ignoreSynchronization = false;
    browser.get(arg1);
    callback()
  });

    this.Given(/^I go on non angular "([^"]*)"$/, function (arg1, callback) {
        browser.driver.ignoreSynchronization = true;
        browser.driver.get(arg1);
        callback()
    });

  this.Then(/^the title should equal "([^"]*)"$/, {timeout: 10 * 1000}, function (arg1, callback) {
      browser.driver.ignoreSynchronization = false;
      expect(browser.getTitle()).to.eventually.equal(arg1).and.notify(callback);
  });

    this.Then(/^the title of non-angular should equal "([^"]*)"$/, {timeout: 10 * 1000}, function (arg1, callback) {
        browser.driver.ignoreSynchronization = true;
        expect(browser.driver.getTitle()).to.eventually.equal(arg1).and.notify(callback);
    });
  this.Then(/^the menu should contain "([^"]*)"$/, function (arg1, callback) {
    element.all(by.css('.nav li')).filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text === arg1;
      });
    }).then(function(filteredElements) {
        expect(filteredElements).to.have.length(1);
        callback();
    });
  });
}
