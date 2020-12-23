import { extend } from 'umi-request';
import { HttpError, InterfaceError } from './error-type';
import { errorHandler } from './error-handler';
import checkGlobalDefine from './check-global-define';
import deviceInfo from './device-info';

// 实例化
const request = extend({
  errorHandler,
});

/**
 * 请求拦截
 */
request.interceptors.request.use(
  (url, options) => {
    checkGlobalDefine();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) {
      throw new Error('用户信息不存在');
    }
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      throw new Error('Token 不存在');
    }

    // 清除 params（即：query参数）
    options.params = {};
    // 请求方法统一为 POST
    options.method = 'POST';
    // 系统报文头
    const sysHead = {
      // 系统
      system: options?.data?.sysHead?.system,
      // 服务
      service: options?.data?.sysHead?.service,
      // 接口
      interface: options?.data?.sysHead?.interface,
      // 版本
      interfaceVersion: options?.data?.sysHead?.interfaceVersion,
    };
    // 本地报文头
    const localHead = {
      // 分页信息
      pageInfo: {
        // 当前页数
        current: options?.data?.localHead?.pageInfo?.current,
        // 每页条数
        pageSize: options?.data?.localHead?.pageInfo?.pageSize,
      },
      // 用户信息
      userInfo: {
        // 用户编号
        userNo: userInfo?.userNo,
        // 用户名
        userName: userInfo?.userName,
        // 角色编号
        roleNo: userInfo?.roleNo,
        // 角色名
        roleName: userInfo?.roleName,
      },
      // 设备信息
      deviceInfo,
    };
    // HTTP 请求体组装
    const data = {
      sysHead,
      localHead,
      body: {
        ...options?.data?.body,
      },
    };
    // 开发环境
    if (process.env.NODE_ENV === 'development') {
      return {
        url: GLOBAL_DEFINE_UMI_REQUEST_PRACTICE.mock
          ? url
          : `${GLOBAL_DEFINE_UMI_REQUEST_PRACTICE.baseUrl}/agrs`,
        options: {
          ...options,
          data,
        },
      };
    }
    // 生产环境
    if (process.env.NODE_ENV === 'production') {
      return {
        url: `${GLOBAL_DEFINE_UMI_REQUEST_PRACTICE.baseUrl}/agrs`,
        options: {
          ...options,
          data,
        },
      };
    }
  },
  {
    global: false,
  },
);

/**
 * 响应拦截
 */
request.interceptors.response.use(
  (response, options) => {
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
            throw new InterfaceError('', resCode, resInfo);
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

export default request;
