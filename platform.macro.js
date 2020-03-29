const { createMacro } = require('babel-plugin-macros');

function platformMacro({ references, babel }) {
  const isWechatValue = process.env.PLATFORM === 'wechat';
  const isToutiaoValue = process.env.PLATFORM === 'toutiao';
  const isAlipayValue = process.env.PLATFORM === 'alipay';
  const isMiniValue =
    ['alipay', 'wechat', 'toutiao'].indexOf(process.env.PLATFORM) !== -1;
  const isWebValue = process.env.PLATFORM === 'web';

  const {
    default: platform = [],
    isWechat = [],
    isToutiao = [],
    isAlipay = [],
    isMini = [],
    isWeb = []
  } = references;

  isToutiao.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isToutiaoValue));
  });
  isWechat.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isWechatValue));
  });
  isAlipay.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isAlipayValue));
  });
  isWeb.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isWebValue));
  });
  isMini.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isMiniValue));
  });
  platform.forEach(reference => {
    reference.replaceWith(
      babel.types.ObjectExpression([
        babel.types.ObjectProperty(
          babel.types.StringLiteral('isWeb'),
          babel.types.booleanLiteral(isWebValue)
        ),
        babel.types.ObjectProperty(
          babel.types.StringLiteral('isWechat'),
          babel.types.booleanLiteral(isWechatValue)
        ),
        babel.types.ObjectProperty(
          babel.types.StringLiteral('isToutiao'),
          babel.types.booleanLiteral(isToutiaoValue)
        ),
        babel.types.ObjectProperty(
          babel.types.StringLiteral('isAlipay'),
          babel.types.booleanLiteral(isAlipayValue)
        ),
        babel.types.ObjectProperty(
          babel.types.StringLiteral('isMini'),
          babel.types.booleanLiteral(isMiniValue)
        )
      ])
    );
  });
}

module.exports = createMacro(platformMacro);
