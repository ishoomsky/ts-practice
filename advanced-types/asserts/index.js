"use strict";
const a = {};
assertUser(a);
a.name = 'Вася';
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Не пользователь');
}
