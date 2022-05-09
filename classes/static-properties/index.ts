class UserService {
  private static db: any;
  static getUser(id: number) {
    return this.db.findById(id);
  }

  constructor(id: number) {}
  create() {
    UserService.db;
  }

  static {
    //no async
    UserService.db = {};
  }
}

UserService.getUser(1);

const service = new UserService(1);
service.create();
