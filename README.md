# umi-request-practice

虽说仓库名称是 umi-request 的实践，

但也是对部门那套 umi-request 封装的简略复刻版。

> 虽说，大部分也是我写的。

**如果喜欢或有帮助的话，求 Star ⭐⭐⭐**

## 需求

- [ ] 都必须走 POST 方法

- [ ] http 请求头要添加 token 及其他业务要素

- [ ] http 请求体的数据格式需要如下这样：

  > 已做简化

```
/** http 请求体 */
interface IHttpBody {
  /** 系统报文头 */
  sysHead: {
    /** 系统标识 */
    system: string;
    /** 服务名称 */
    service: string;
    /** 接口名称 */
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
    /** 设备信息 */
    deviceInfo: IDeviceInfo;
  };
  /** 报文体 */
  body: {};
}
```

- [ ] 要支持本地 mock
- [ ] 要支持过滤重复并发请求
- [ ] token 过期要自动跳回登录页面
- [ ] 提供类型支持
- [ ] 提供使用文档
- [ ] 错误均以 notification 通知提醒框的方式进行提醒，且位置位于右上角
- [ ] 希望使用者不再需要对响应结果做非空等判断，直接可使用
- [ ] 即使响应结果是错误，但希望使用者也能接收到，据此做其他逻辑
