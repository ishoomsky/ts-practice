interface IUser {
  name: string,
  age: number
}

type keysOfUser = keyof IUser;
const key: keysOfUser = 'name';


//generic keyof
function getValue<T, Y extends keyof T>(obj: T, key: Y) {
  return obj[key];
}

const user: IUser = {
  name: 'vasya',
  age: 30
}

const userName = getValue(user, 'name');