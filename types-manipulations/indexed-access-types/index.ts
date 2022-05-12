interface Role {
  name: string
}

interface Permission {
  endDate: Date;
}

interface User {
  name: string;
  roles: Role[];
  permission: Permission;
}

const user: User = {
  name: "Вася",
  roles: [],
  permission: {
    endDate: new Date(),
  }

}

const userName = user['name'];
 
type roleType = User['roles'][number];

const roles = ['admin', 'user', 'superuser'] as const;

type roleTypes = typeof roles[number];

type dateType = User['permission']['endDate'];
