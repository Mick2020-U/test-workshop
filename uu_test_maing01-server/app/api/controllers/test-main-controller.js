"use strict";
const TestMainAbl = require("../../abl/test-main-abl.js");

class TestMainController {
  init(ucEnv) {
    return TestMainAbl.init(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new TestMainController();
