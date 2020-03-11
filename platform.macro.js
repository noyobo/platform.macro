const { createMacro } = require('babel-plugin-macros');

function platformMacro({ references, babel }) {
  const isWechatValue = process.env.PLATFORM === 'wechat';
  const isToutiaoValue = process.env.PLATFORM === 'toutiao';
  const isWebValue = process.env.PLATFORM === 'web';

  const {
    default: platform = [],
    isWechat = [],
    isToutiao = [],
    isWeb = []
  } = references;

  isToutiao.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isToutiaoValue));
  });
  isWechat.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isWechatValue));
  });
  isWeb.forEach(reference => {
    reference.replaceWith(babel.types.booleanLiteral(isWebValue));
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
        )
      ])
    );
  });
}

module.exports = createMacro(platformMacro);
