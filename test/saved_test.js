import assert from "assert";
import {
  saveExpressionTest
} from "../js/savedExpressions.js";


describe("Checks if it saves expression in list or not", function() {
  let savedArray = [];
  it("Should save an expression", function() {
    let input = "125";
    assert.equal(saveExpressionTest(input), 125)
  });
  it("Should not list 'Error' in list", function() {
    let input = "Error";
    assert.equal(saveExpressionTest(input), null);
  });
  it("Should not list 'Infinity' in list", function() {
    let input = "Infinity";
    assert.equal(saveExpressionTest(input), null);
  });
  it("Should not list 'func error' in list", function() {
    let input = "function Error() { [native code] }";
    assert.equal(saveExpressionTest(input), null);
  });
  it("Should not list 'undefined' in list", function() {
    let input = "undefined";
    assert.equal(saveExpressionTest(input), null);
  });
});
