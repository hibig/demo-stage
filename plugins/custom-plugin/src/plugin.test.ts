import { customPluginPlugin } from './plugin';

describe('custom-plugin', () => {
  it('should export plugin', () => {
    expect(customPluginPlugin).toBeDefined();
  });
});
