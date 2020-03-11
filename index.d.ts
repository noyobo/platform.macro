declare module 'platform.macro' {
  const platform: {
    isWeb: boolean;
    isWechat: boolean;
    isToutiao: boolean;
  };

  export default platform;
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
