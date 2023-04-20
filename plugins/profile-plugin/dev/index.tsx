import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { profilePluginPlugin, ProfilePluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(profilePluginPlugin)
  .addPage({
    element: <ProfilePluginPage />,
    title: 'Root Page',
    path: '/profile-plugin'
  })
  .render();
