"use strict";
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsers() {
        return this.users;
    }
}
function nullUsers(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log(obj.users);
    return obj;
}
console.log('without decorators: ', new UserService().getUsers());
console.log('with nullUsers: ', nullUsers(new UserService()).getUsers());
logUsers(new UserService()).getUsers();
