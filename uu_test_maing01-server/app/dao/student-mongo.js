"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class StudentMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
  }
  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(awid, id) {
    let filter = {
      awid: awid,
      id: id
    };
    return await super.findOne(filter);
  }
}

module.exports = StudentMongo;
