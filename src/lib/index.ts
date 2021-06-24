import { message } from 'antd';
import { extend } from 'umi-request';

import { HttpError, SystemError, PremiseError } from './error-type';
import { errorHandler } from './error-handler';
import checkUmiDefine from './check-global-define';
import generateDeviceInfo, { IDeviceInfo } from './generate-device-info';

/**
 * umi-request 实例 <br>
 * 参考：<br>
 * https://github.com/umijs/umi-request/blob/master/README_zh-CN.md#创建实例
 */
const blueRequest = extend({
  /** url 后缀 */
  suffix: 'agrs',
  /** 统一异常处理 */
  errorHandler,
});

/** http 请求体 */
interface IHttpBody {
  /** 系统报文头 */
  sysHead: {
    /** 系统 */
    system: string;
    /** 服务 */
    service: string;
    /** 接口 */
    interface: string;
    /** 接口版本 */
    interfaceVersion: string;
  };
  /** 本地报文头 */
  localHead: {
    /** 分页信息 */
    pageInfo: {
      /** 当前页数 */
      current: number;
      /** 每页条数 */
      pageSize: number;
    };
    /** 用户信息 */
    userInfo: {
      /** 用户编号 */
      userNo: string;
      /** 用户名称 */
      userName: string;
      /** 角色编号 */
      roleNo: string;
      /** 角色名称 */
      roleName: string;
    };
    /** 设备指纹信息 */
    deviceInfo: IDeviceInfo;
  };
  /** 报文体 */
  body: {};
}

/**
 * 请求拦截
 */
blueRequest.interceptors.request.use(
  (url, options) => {
    checkUmiDefine();

    let userInfo;
    let token;
    if (process.env.NODE_ENV === 'development') {
      url = BLUE_REQUEST.mock ? `${url}` : `${BLUE_REQUEST.baseUrl}`;
      try {
        userInfo = JSON.parse(<string>localStorage.getItem('userInfo'));
        token = localStorage.getItem('token');
        if (!token) throw Error;
      } catch (e) {
        message.warn('登录过期或未登录，将为你提供一份临时 token 与 userInfo');
        userInfo = {
          userNo: 'userNo',
          userName: 'userName',
          roleNo: 'roleNo',
          roleName: 'roleName',
        };
        token = 'token';
      }
    }
    if (process.env.NODE_ENV === 'production') {
      url = `${BLUE_REQUEST.baseUrl}`;
      try {
        userInfo = JSON.parse(<string>localStorage.getItem('userInfo'));
        const token = localStorage.getItem('token');
        if (!token) throw Error;
      } catch (e) {
        throw new PremiseError('登录过期或未登录');
      }
    }

    // 请求方法统一为 POST
    options.method = 'POST';

    const httpBody: IHttpBody = {
      sysHead: {
        system: options?.data?.sysHead?.system || '',
        service: options?.data?.sysHead?.service || '',
        interface: options?.data?.sysHead?.interface || '',
        interfaceVersion: options?.data?.sysHead?.interfaceVersion || '',
      },
      localHead: {
        pageInfo: {
          current: options?.data?.localHead?.pageInfo?.current || 1,
          pageSize: options?.data?.localHead?.pageInfo?.pageSize || 10,
        },
        userInfo: {
          userNo: userInfo?.userNo || '',
          userName: userInfo?.userName || '',
          roleNo: userInfo?.roleNo || '',
          roleName: userInfo?.roleName || '',
        },
        deviceInfo: generateDeviceInfo(),
      },
      body: {
        ...options?.data?.body,
      },
    };
    return {
      url,
      options: {
        ...options,
        data: httpBody,
      },
    };
  },
  {
    global: false,
  },
);

/**
 * 响应拦截
 */
blueRequest.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response
        .clone()
        .json()
        .then(responseJson => {
          if (responseJson?.sysHead?.resCode === '000000') {
            return responseJson;
          } else {
            const resCode = responseJson?.sysHead?.resCode;
            const resInfo = responseJson?.sysHead?.resInfo;
            throw new SystemError();
          }
        });
    } else {
      throw new HttpError('', response.status);
    }
  },
  {
    global: false,
  },
);

export default blueRequest;
