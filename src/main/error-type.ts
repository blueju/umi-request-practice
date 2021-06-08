export class HttpError extends Error {
  constructor(message: string, status: number) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class SystemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
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
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
