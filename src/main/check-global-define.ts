/**
 * 检查 blue-request 所需的全局常量定义了没。 <br>
 * 参考： <br>
 * 1、https://umijs.org/zh-CN/config#define <br>
 * 2、https://webpack.docschina.org/plugins/define-plugin
 */
export default function checkUmiDefine() {
  if (!GLOBAL_DEFINE_UMI_REQUEST_PRACTICE.baseUrl) {
    throw new Error('接口基础地址不存在');
  }
}
