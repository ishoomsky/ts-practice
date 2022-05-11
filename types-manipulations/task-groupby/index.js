"use strict";
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function groupData(data, key) {
    return data.reduce((map, item) => {
        const itemKey = item[key];
        let currentElement = map[itemKey];
        if (Array.isArray(currentElement)) {
            currentElement.push(item);
        }
        else {
            currentElement = [item];
        }
        map[itemKey] = currentElement;
        return map;
    }, {});
}
// groupData(data, 'group');
