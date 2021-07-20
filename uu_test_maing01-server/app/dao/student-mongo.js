"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class StudentMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = StudentMongo;
