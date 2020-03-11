declare module 'platform.macro' {
  export default {
    isWeb: boolean,
    isWechat: boolean,
    isToutiao: boolean
  };

  /**
   * web 平台
   */
  export const isWeb: boolean;
  /**
   * 微信小程序
   */
  export const isWechat: boolean;
  /**
   * 字节跳动小程序
   */
  export const isToutiao: boolean;
}
