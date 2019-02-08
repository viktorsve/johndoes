//jshint esversion:6

import assert from "assert";
import {chatAnswerFunc} from "../js/chat.js";

describe("Testar chat-funktion", function() {
  it("förväntat svar hello, how are you?", function (){
    let testOne = "hello";
    assert.equal(chatAnswerFunc(testOne), "Hello. How are you?");
  });
  it("förväntat svar Nice!", function() {
    let testTwo = "i am good";
    assert.equal(chatAnswerFunc(testTwo), "Nice!");
  });
  it("förväntat svar I do not understand.", function() {
    let testThree = "tja";
    assert.equal(chatAnswerFunc(testThree), "I do not understand.");
  });
});
