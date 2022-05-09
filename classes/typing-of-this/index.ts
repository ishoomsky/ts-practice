class UserBuilder {
  name: string;
  // problem: setName(name:string): UserBuilder {
  // solving: use this
  setName(name: string): this {
    this.name = name;
    return this;
  }
  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[];
}

const res = new UserBuilder().setName("Vasya");
const res2 = new AdminBuilder().setName("Petya");

let user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()) {
  console.log(user);
} else {
  console.log(user);
}
