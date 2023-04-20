import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { customPluginPlugin, CustomPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(customPluginPlugin)
  .addPage({
    element: <CustomPluginPage />,
    title: 'Root Page',
    path: '/custom-plugin'
  })
  .render();
