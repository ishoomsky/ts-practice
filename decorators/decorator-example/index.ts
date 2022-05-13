interface IUserService {
  users: number,
  getUsers(): number,
}


class UserService implements IUserService {
  users: number = 1000;
  getUsers(): number {
    return this.users;
  }
}

function nullUsers(obj:IUserService): IUserService {
  obj.users = 0;
  return obj;
}
function logUsers(obj: IUserService): IUserService {
  console.log(obj.users);
  return obj;
}

console.log('without decorators: ', new UserService().getUsers());
console.log('with nullUsers: ', nullUsers(new UserService()).getUsers());
logUsers(new UserService()).getUsers();
