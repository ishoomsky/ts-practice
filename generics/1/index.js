"use strict";
//built-in generics
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const num = [1, 2, 3];
//promise generic type
function f() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield new Promise((resolve, reject) => {
            resolve('123');
        });
    });
}
const check = {
    drive: true,
    kpp: false,
};
//func generic
function logMiddleware(date) {
    console.log(date);
    return date;
}
;
const res = logMiddleware('sdf');
function getSplitedHalf(data) {
    const splitedHalfLength = data.length / 2;
    return data.splice(0, splitedHalfLength);
}
const arr = [1, 2, 3, 4];
getSplitedHalf(arr);
function toString(data) {
    if (typeof data == 'string')
        return data;
    if (data instanceof Array)
        return data.toString();
    switch (typeof data) {
        case 'number':
        case 'boolean':
        case 'bigint':
        case 'symbol':
        case 'function':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(toString({ val: 123 }));
console.log(toString([1, 2, 3]));
console.log(toString(5));
console.log(toString('lorem'));
console.log(toString(() => '123'));
