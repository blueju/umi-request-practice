/**
 * HTTP 错误，除网络错误、http 状态码为 200 以外的错误
 */
export class HttpError extends Error {
  constructor(message: string, status: number) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * 系统错误，http 状态码为 200，但响应数据中 sysHead.retCd 为字符串 999999 的错误
 */
export class SystemError extends Error {
  resCode: string;
  resInfo: string;
  constructor(message: string, resCode: string, resInfo: string) {
    super(message);
    this.name = this.constructor.name;
    this.resCode = resCode;
    this.resInfo = resInfo;
  }
}

/**
 * Premise Error
 * 前提错误
 * 如：全局常量不存在，用户信息不存在，Token 不存在等
 */
export class PremiseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
