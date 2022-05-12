type Modifiers = 'read' | 'update' | 'create';

type UserRoles = {
  customers?: Modifiers,
  projects?: Modifiers,
  adminPanel?: Modifiers
}

type ModifierToAccess<Type> = {
  [Property in keyof Type]: boolean;
  // [Property in keyof Type as Exclude<`${string & Property}CanAccess`, 'adminPanelCanAccess'>]: boolean; // map property, change name and filter list of properties!
  // [Property in keyof Type]-?: boolean; // mark as required
  // [Property in keyof Type]+?: boolean; // mark as optional
  // +readonly [Property in keyof Type]: boolean; //mark as readonly
  // [Property in keyof Type as `${string & Property}CanAccess`]: boolean; //map property name of type!

}

type UserAccess2 = ModifierToAccess<UserRoles>;

type UserAccess1 = {
  customers?: boolean,
  projects?: boolean,
  adminPanel?: boolean
}