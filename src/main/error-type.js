/**
 * HTTP Error
 * @param {*} message Error 必备属性
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
 * Gateway Error
 * @param {*} message Error 必备属性
 * @param {*} resCode   返回的网关状态码
 * @param {*} resInfo  返回的网关提示语
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
