export default (role: string, server: any) => {
  // tslint:disable-next-line:no-console
  console.log(`A ${role} server joined the replica set`, server.me);
};
