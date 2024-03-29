// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');

module.exports = function () {

  // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
  var url = require('url');

  this.Given(/^I am an existing user$/, function () {
    server.call('reset'); // server is a connection to the mirror
  });

  this.When(/^I navigate to "([^"]*)"$/, function (relativePath) {
    // process.env.ROOT_URL always points to the mirror
    client.url(url.resolve(process.env.ROOT_URL, relativePath));
  });

  this.Then(/^I should see the text "([^"]*)"$/, function (expectedText) {
    client.waitForExist('p');
    var loginText = client.getText('p');
    expect(loginText).toEqual(expectedText);
  });

};
