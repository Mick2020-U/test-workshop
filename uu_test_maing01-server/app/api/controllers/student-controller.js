"use strict";
const CreateAbl = require("../../abl/student/create-abl");
const GetAbl = require("../../abl/student/get-abl");

class StudentController {
  get(ucEnv) {
    return GetAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return CreateAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new StudentController();
