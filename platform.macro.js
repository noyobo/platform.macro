const { createMacro } = require('babel-plugin-macros');

const isWechatValue = process.env.PLATFORM === 'wechat';
const isToutiaoValue = process.env.PLATFORM === 'toutiao';
const isWebValue = process.env.PLATFORM === 'web';

function platformMacro({ references, babel }) {
  const { isWechat = [], isToutiao = [], isWeb = [] } = references;

  isToutiao.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isToutiaoValue));
  });
  isWechat.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isWechatValue));
  });
  isWeb.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isWebValue));
  });
}

module.exports = createMacro(platformMacro);
