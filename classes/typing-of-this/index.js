"use strict";
class UserBuilder {
    // problem: setName(name:string): UserBuilder {
    // solving: use this
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder().setName("Vasya");
const res2 = new AdminBuilder().setName("Petya");
let user = new UserBuilder();
if (user.isAdmin()) {
    console.log(user);
}
else {
    console.log(user);
}
