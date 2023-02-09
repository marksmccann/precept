import { createInitializer } from 'froyojs';
import * as components from './src/index';

const initialize = createInitializer(components);

initialize();

export * as froyojs from 'froyojs';
export { components, initialize };
