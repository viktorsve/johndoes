import assert from "assert";
import {
  checkNumbers
} from "../js/equalbutton.js";

describe("Test eval function", function() {
  it("Return right sum", function() {
    assert.equal(checkNumbers("=", "2+2"), "4");
  });
  it("Return error", function() {
    assert.equal(checkNumbers("=", "2++2"), "Error");
  });
});

describe("Test replace method", function() {
  it("Return right character", function() {
    assert.equal(checkNumbers("=", "2^2"), "4");
  });
  it("Return error", function() {
    assert.equal(checkNumbers("=", "2^^0"), "Error");
  });
});

describe("Test square root function", function() {
  it("Return right answer", function() {
    assert.equal(checkNumbers("√", "2"), 1.4142135623730951);
  });
  it("Return Error", function() {
    assert.equal(checkNumbers("√", "(3+6)"), "Error");
  });
});

describe("Clear out errors and zeroes", function() {
  it("Clear out 0", function() {
    assert.equal(checkNumbers("1", "0"), "1");
  });
  it("Clear error", function() {
    assert.equal(checkNumbers("1", "Error"), "1");
  });
});