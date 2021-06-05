/**
 * 全局常量检查
 * https://umijs.org/zh-CN/config#define
 * https://webpack.docschina.org/plugins/define-plugin
 */
export default () => {
  if (!GLOBAL_DEFINE_UMI_REQUEST_PRACTICE.baseUrl) {
    throw new Error('接口基础地址不存在');
  }
};
