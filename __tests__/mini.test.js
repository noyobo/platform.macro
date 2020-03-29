import { join } from 'path';
import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  pluginName: 'platform.macro',
  plugin,
  tests: [
    {
      title: 'mini',
      snapshot: false,
      fixture: join(__dirname, '../__fixtures__/mini/code.js'),
      outputFixture: join(__dirname, '../__fixtures__/mini/output.js'),
      setup() {
        process.env.PLATFORM = 'toutiao';
      }
    }
  ],
  endOfLine: 'preserve'
});
