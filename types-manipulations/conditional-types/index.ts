interface HTTPResponse<T extends 'success' | 'failed'> {
  code: number;
  data: T extends 'success' ? string : Error;
  // additionalData: T extends 'success' ? string : number;
}
 
const success: HTTPResponse<'success'> = {
  code: 200,
  data: 'done'
}

const error: HTTPResponse<'failed'> = {
  code: 501,
  data: new Error('error!')
}

class User {
  id!: number;
  name!: string;
}

class UserPersistant extends User {
  dbId!: string;
}

function getUser(id: number): UserPersistant
function getUser(dbId: string ): User;
function getUser(dbIdorId: string | number): User | UserPersistant {
  if (typeof dbIdorId == 'number') {
    return new User();
  } else {
    return new UserPersistant();
  }
}

type UserOrUserPersistant <T extends number | string> = T extends number ? User : UserPersistant;

function getUser2<T extends number | string>(id: T): UserOrUserPersistant<T> {
  if (typeof id == 'number') {
    return new User() as UserOrUserPersistant<T>;
  } else {
    return new UserPersistant() as UserOrUserPersistant<T>;
  }
}

const res = getUser(1);
const res2 = getUser2('asd');
