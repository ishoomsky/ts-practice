interface IUserService {
  users: number;
  getUsers(): number;
}


@CreatedAt
class UserService implements IUserService {
  users: number = 1000;
  getUsers(): number {
    return this.users;
  }
}

function CreatedAt<T extends {new (...args: any[]): {}}>(constructor: T) {
  return class extends constructor {
    createdAt: Date = new Date();
  }
}

type CreatedAt = {
  createdAt: Date;
}

let service = new UserService();

console.log((service as UserService & CreatedAt).createdAt);
