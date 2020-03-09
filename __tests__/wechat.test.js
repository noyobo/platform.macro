import { join } from 'path';
import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  pluginName: 'platform.macro',
  plugin,
  tests: [
    {
      title: 'wechat',
      snapshot: false,
      fixture: join(__dirname, '../__fixtures__/wechat/code.js'),
      outputFixture: join(__dirname, '../__fixtures__/wechat/output.js'),
      setup() {
        process.env.PLATFORM = 'wechat';
      }
    }
  ],
  endOfLine: 'preserve'
});
