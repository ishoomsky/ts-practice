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


interface IObjectWithId {
  id: number;
}

enum SortType {
  ASC = 'asc',
  DESC = 'desc'
}

function sortById<T extends IObjectWithId>(array: Array<T>, sortType: SortType = SortType.ASC): Array<T> {
  return array.sort((a, b) => {
    switch(sortType as SortType){
      case SortType.ASC:
        return a.id - b.id;
      case SortType.DESC:
        return b.id - a.id;
    }
  })
}

console.log(sortById(data, SortType.ASC));
console.log(sortById(data, SortType.DESC));
