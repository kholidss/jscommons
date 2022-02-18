import Config from './Config';

export default (config: any) => (role: string, server: any) => {
  console.log(`A ${role} server joined the replica set`, server.me, config);
};
