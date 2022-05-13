interface IUserService {
  users: number,
  getUsers(): number,
}


@logFactory()
@nullUsersFactory(3333)
class UserService implements IUserService {
  users: number = 1000;
  getUsers(): number {
    return this.users;
  }
}

// function log(target: Function) {
//   console.log('log f');
// }

// function nullUsers(target: Function) {
//   console.log('nullUsers f');
//   target.prototype.users = 0;
// }

function logFactory() {
  console.log('logFactory init')
  return (target: Function) => {
    console.log('logFactory run');
  };
}

function nullUsersFactory(users: number) {
  console.log('nullUsersFactory init')
  return ((target: Function) => {
    console.log('nullUsersFactory run')
    target.prototype.users = users;
  });
}

function setUsers<T extends {new (...args: any[]): {}}>(constructor: T) {
  return class extends constructor {
    users = 500;
  }
}

function setUsersFactory(users: number) {
  return <T extends {new (...args: any[]): {}}>(constructor: T) => {
    return class extends constructor {
      users = users;
    }
  };
}



console.log(new UserService().getUsers())
