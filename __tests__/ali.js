import { join } from 'path';
import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  pluginName: 'platform.macro',
  plugin,
  tests: [
    {
      title: 'ali',
      snapshot: false,
      fixture: join(__dirname, '../__fixtures__/ali/code.js'),
      outputFixture: join(__dirname, '../__fixtures__/ali/output.js'),
      setup() {
        process.env.PLATFORM = 'ali';
      }
    }
  ],
  endOfLine: 'preserve'
});
