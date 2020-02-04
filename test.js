var data = require("./getData.js");
var save = require("./saveFile.js");
var variables = require("./variables.js");
var assert = require("assert");

describe("Get Subset of Clicks test", function() {
  context("With valid arguments", function() {
    it("Output and input length of array should match from variables.js file", function() {
      assert.equal(
        variables.output.length,
        data.getSubsetOfClicks(variables.input).length
      );
    });
  });
  context("With invalid arguments", function() {
    it("Should throw error", function() {
      assert.throws(
        () => data.getSubsetOfClicks({ test: 123 }),
        TypeError,
        "clicks.forEach is not a function"
      );
    });
  });
  context("With no arguments", function() {
    it("Should throw error", function() {
      assert.throws(
        () => data.getSubsetOfClicks(),
        TypeError,
        "Cannot read property 'forEach' of undefined"
      );
    });
  });
});

