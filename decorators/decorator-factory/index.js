"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let UserService = class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsers() {
        return this.users;
    }
};
UserService = __decorate([
    logFactory(),
    nullUsersFactory(3333)
], UserService);
// function log(target: Function) {
//   console.log('log f');
// }
// function nullUsers(target: Function) {
//   console.log('nullUsers f');
//   target.prototype.users = 0;
// }
function logFactory() {
    console.log('logFactory init');
    return (target) => {
        console.log('logFactory run');
    };
}
function nullUsersFactory(users) {
    console.log('nullUsersFactory init');
    return ((target) => {
        console.log('nullUsersFactory run');
        target.prototype.users = users;
    });
}
function setUsers(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 500;
        }
    };
}
function setUsersFactory(users) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
console.log(new UserService().getUsers());
