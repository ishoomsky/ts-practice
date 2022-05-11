"use strict";
const data = [
    {
        id: 1,
        name: 'Vasya'
    },
    {
        id: 2,
        name: 'Alena'
    },
    {
        id: 3,
        name: 'Bam'
    }
];
var SortType;
(function (SortType) {
    SortType["ASC"] = "asc";
    SortType["DESC"] = "desc";
})(SortType || (SortType = {}));
function sortById(array, sortType = SortType.ASC) {
    return array.sort((a, b) => {
        switch (sortType) {
            case SortType.ASC:
                return a.id - b.id;
            case SortType.DESC:
                return b.id - a.id;
        }
    });
}
console.log(sortById(data, SortType.ASC));
console.log(sortById(data, SortType.DESC));
