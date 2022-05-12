type A = Awaited<Promise<string>>;
type A2 = Awaited<Promise<Promise<string>>>;

interface IMenu {
  name: string;
  url: string;
}
//example 1
async function getMenu(): Promise<Array<IMenu>> {
  return [{name: 'home', url: '/home'}]
}
type returned = Awaited<ReturnType<typeof getMenu>>;

//example 2. shows that new version of TypeScript gives us information about 'Awaited'         : Promise<Awaited<T>[]>
async function getArray<T>(x: T)  {
  return [await x];
}
