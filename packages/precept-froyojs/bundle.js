import { createInitializer } from 'froyojs';
import * as components from './src/index';

const initialize = createInitializer(components);

export * as froyojs from 'froyojs';
export { components, initialize };
