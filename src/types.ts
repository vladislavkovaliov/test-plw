import { Stores } from './stores/types';
import { Services } from './services/types';

export interface AppOptions {
  services: Services;
  stores: Stores;
}