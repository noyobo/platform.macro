import { join } from 'path';
import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  pluginName: 'platform.macro',
  plugin,
  tests: [
    {
      title: 'alipay',
      snapshot: false,
      fixture: join(__dirname, '../__fixtures__/alipay/code.js'),
      outputFixture: join(__dirname, '../__fixtures__/alipay/output.js'),
      setup() {
        process.env.PLATFORM = 'alipay';
      }
    }
  ],
  endOfLine: 'preserve'
});
