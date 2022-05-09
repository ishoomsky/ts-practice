"use strict";
class Controller {
    handleWithLogs(req) {
        console.log("start");
        this.handle(req);
        console.log("end");
    }
}
class UserController extends Controller {
    handle(req) {
        console.log();
    }
}
// new Controller() //error
const c = new UserController();
c.handleWithLogs("request");
