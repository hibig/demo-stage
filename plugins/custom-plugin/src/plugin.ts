import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const customPluginPlugin = createPlugin({
  id: 'custom-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const CustomPluginPage = customPluginPlugin.provide(
  createRoutableExtension({
    name: 'CustomPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
