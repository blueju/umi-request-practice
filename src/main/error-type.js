/**
 * HTTP Error
 * HTTP 错误
 * @param {*} message     Error 必备属性
 * @param {*} statusCode  返回的 HTTP 状态码
 */
export class HttpError extends Error {
  constructor(message, statusCode) {
    super(message, statusCode);
    this.name = 'HttpError';
    this.message = message;
    this.statusCode = statusCode;
  }
}

/**
 * Interface Error
 * 接口错误
 * @param {*} message Error 必备属性
 * @param {*} resCode 返回的接口响应状态码
 * @param {*} resInfo 返回的接口响应提示语
 */
export class InterfaceError extends Error {
  constructor(message, resCode, resInfo) {
    super(message, resCode, resInfo);
    this.name = 'InterfaceError';
    this.message = message;
    this.resCode = resCode;
    this.resInfo = resInfo;
  }
}

/**
 * Premise Error
 * 前提错误
 * 如：全局常量不存在，用户信息不存在，Token 不存在等
 * @param {*} message Error 必备属性
 * @param {*} resInfo 返回的接口响应提示语
 */
export class PremiseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PremiseError';
    this.message = message;
  }
}
