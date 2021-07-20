"use strict";

const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const Errors = require("../../api/errors/student-error.js");

const WARNINGS = {};

class CreateAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("student");
  }

  async create(awid, dtoIn) {
    let student;

    student = await this.dao.create({ awid, ...dtoIn });

    return {
      student,
      success: "student was created"
    };
  }
}

module.exports = new CreateAbl();
