# umi-request-practice

虽说是 umi-request 的实践，

但其实也是对公司那一套对 umi-request 封装的简略版重写复刻（其实也是我自己的）。

**如果喜欢或有帮助的话，求 Star ⭐⭐⭐**

## 需求

- [ ] js 插件
- [ ] umi js 插件
- [ ] 基于后管网关的特殊性，所有请求都走 post 方法
- [ ] 统一添加 token，用户信息，设备指纹信息，分页信息等
- [ ] 基于后管网关的特殊性，http 请求体结构需统一，大致为：

```
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
```

- [ ] 支持 mock
- [ ] 支持约定式 mock
- [ ] 支持取消无效请求（如：无 Token，无用户信息等）
- [ ] 支持拦截重复请求
- [ ] 过期 Token 请求自动跳回登录页面
- [ ] 统一错误处理
- [ ] 使用 typescript
- [ ] 支持统一过滤响应错误
