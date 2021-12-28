import { ModuleServices, ServiceName, Services } from '../types';
import * as modules from "../index";

export function createGlobalServices(services: ModuleServices) {
  return Object.keys(services).reduce((acc: Services, name: string) => {
    // @ts-ignore
    acc[name as ServiceName] = new services[name]();

    return acc;
  }, {} as Services);
}


// eslint-disable-next-line import/no-anonymous-default-export
export default () => createGlobalServices(modules);