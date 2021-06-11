export interface IDeviceInfo {
  /** 操作系统名称 */
  os: string;
  /** 浏览器名称 */
  browser: string;
  /** 浏览器版本 */
  browserVersion: string;
  /** 浏览器语言 */
  lang: string;
  /** 分辨率 */
  resolutionRatio: string;
}

/**
 * 设备指纹信息
 */
export default function generateDeviceInfo() {
  return {
    os: window.navigator.appVersion,
    browser: window.navigator.appVersion,
    browserVersion: window.navigator.appVersion,
    lang: window.navigator.language,
    resolutionRatio: `${window.screen.width}*${window.screen.height}`,
  } as IDeviceInfo;
}
