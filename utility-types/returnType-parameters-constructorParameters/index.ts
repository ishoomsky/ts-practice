class User {
  constructor(public id: number, public name: string){}
}

function getData(id: number): User {
  return new User(id, 'Вася')
}

type returnType = ReturnType<typeof getData>;
type parametersType = Parameters<typeof getData>;
type firstArg = parametersType[0];
//or type parametersType = Parameters<typeof getData>[0];

type anyFuncExample = ReturnType<() => void>;
type genericExample = ReturnType<<T>() => T>; // returns unknown because T is unknown
type extGenericExample = ReturnType<<T extends string>() => T>; // returns string

type constructorParameters = ConstructorParameters<typeof User>; //class parameters
type instanceTypeExample = InstanceType<typeof User>;
