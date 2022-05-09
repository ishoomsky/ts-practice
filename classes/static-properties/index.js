"use strict";
class UserService {
  static getUser(id) {
    return this.db.findById(id);
  }
  create() {
    UserService.db;
  }
}
(() => {
  UserService.db = {};
})();
UserService.getUser(1);
const service = new UserService();
service.create();
