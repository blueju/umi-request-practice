# umi-request-practice

> umi-request 实践

## 需求

- [x] 做成支持 Umi 的 JS 插件

- [x] 所有请求都走 POST 方法

- [x] 统一添加 Token，用户信息，设备信息等

- [x] 统一 HTTP 请求体结构，大致为：

```
{
  // 系统报文头
  sysHead: {
    // 服务
    service: "",
    // 接口
    interface: "",
    // 接口版本
    interfaceVersion: "",
    // 系统标识
    systemTag: ""
  },
  // 本地报文头
  localHead: {
    // 分页信息
    pageInfo: "",
    // 用户信息
    userInfo: "",
    // 设备信息
    deviceInfo: ""
  },
  // 报文体
  body: {
    ...
  }
}
```

- [x] 支持 Mock

- [ ] 支持无效请求取消（如：无 Token，无用户信息等）

- [ ] 支持重复请求拦截

- [x] 过期 Token 请求自动跳出

- [x] 统一错误处理
