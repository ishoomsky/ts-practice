interface IUserService {
  users: number,
  getUsers(): number,
}

// @nullUsers
@setUsers
class UserService implements IUserService {
  users: number = 1000;
  getUsers(): number {
    return this.users;
  }
}

function nullUsers(target: Function) {
  target.prototype.users = 0;
}

function setUsers<T extends {new (...args: any[]): {}}>(constructor: T) {
  return class extends constructor {
    users = 500;
  }
}


console.log(new UserService().getUsers())
