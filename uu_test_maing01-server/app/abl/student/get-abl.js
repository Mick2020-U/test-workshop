"use strict";

const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const Errors = require("../../api/errors/student-error.js");

const WARNINGS = {};

class GetAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("student");
  }

  async get(awid, dtoIn) {
    let student;

    student = await this.dao.get(awid, dtoIn.id);

    if (!student) {
      throw new Error("no student");
    }

    return {
      student
    };
  }
}

module.exports = new GetAbl();
