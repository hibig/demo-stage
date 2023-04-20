import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const profilePluginPlugin = createPlugin({
  id: 'profile-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const ProfilePluginPage = profilePluginPlugin.provide(
  createRoutableExtension({
    name: 'ProfilePluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
