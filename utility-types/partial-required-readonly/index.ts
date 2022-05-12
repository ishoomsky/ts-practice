interface User {
  name: string,
  age?: number,
  email: string
}
type partial = Partial<User>;
const p: partial = {} //bad practise because empty object is valid

type required = Required<User>;
// marks age?: as required prop
// const r: required = {
//   name: 'test',
//   email: 'test'
// }
type readonly = Readonly<User>;

//we can mix it 

type RequiredAndReadonly = Required<Readonly<User>>
