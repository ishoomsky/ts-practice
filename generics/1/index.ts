//built-in generics

const num: Array<number> = [1,2,3];

//promise generic type
async function f() {
  const result = await new Promise<string>((resolve, reject) => {
    resolve('123');
  })
}

const check: Record<string, boolean> = {
  drive: true,
  kpp: false,
}

//func generic
function logMiddleware<T>(date: T): T {
  console.log(date);
  return date;
};
const res = logMiddleware<string>('sdf');

function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const splitedHalfLength = data.length / 2;
  return data.splice(0, splitedHalfLength);
}
const arr = [1,2,3,4];
getSplitedHalf(arr);

//typing
const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;

interface ILogLine<T> {
  timeStamp: Date;
  data: T
}

type ILogLineType<T> = {
  timeStamp: Date;
  data: T
}

const logLine: ILogLineType<{a: number}> = {
  timeStamp: new Date(),
  data: {
    a: 1
  }
}


function toString<T>(data: T): string | undefined {
  if(typeof data == 'string') return data;
  if(data instanceof Array) return data.toString();

  switch(typeof data) {
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

console.log(toString({val: 123}));
console.log(toString([1,2,3]));
console.log(toString(5));
console.log(toString('lorem'));
console.log(toString(() => '123'));

