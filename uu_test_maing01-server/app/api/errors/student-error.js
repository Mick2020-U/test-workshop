"use strict";

const TestMainUseCaseError = require("./test-main-use-case-error.js");
const STUDENT_ERROR_PREFIX = `${TestMainUseCaseError.ERROR_PREFIX}student/`;

const Create = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}create/`,
  
};

const Get = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}get/`,
  
};

module.exports = {
  Get,
  Create
};
