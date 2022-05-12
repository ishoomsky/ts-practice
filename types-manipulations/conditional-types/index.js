"use strict";
const success = {
    code: 200,
    data: 'done'
};
const error = {
    code: 501,
    data: new Error('error!')
};
class User {
}
class UserPersistant extends User {
}
function getUser(dbIdorId) {
    if (typeof dbIdorId == 'number') {
        return new User();
    }
    else {
        return new UserPersistant();
    }
}
function getUser2(id) {
    if (typeof id == 'number') {
        return new User();
    }
    else {
        return new UserPersistant();
    }
}
const res = getUser(1);
const res2 = getUser2('asd');
