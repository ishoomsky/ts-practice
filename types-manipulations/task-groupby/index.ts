const data = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
];

interface IData {
  group: number,
  name: string
}

interface IGroup<T> {
  [key: key]: Array<T>
}

type key = string | number | symbol;

function groupData<T extends Record<string, any>>(data: Array<T>, key: keyof T): IGroup<T> {
  return data.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let currentElement = map[itemKey];
    if(Array.isArray(currentElement)) {
      currentElement.push(item);
    } else {
      currentElement = [item];
    }

    map[itemKey] = currentElement;
    return map;
  }, {})
}


// groupData(data, 'group');

