import umirc from '../../.umirc';

const {
  define: { BLUE_REQUEST },
} = umirc;
const required = ['baseUrl'];

/**
 * 检查 blue-request 所需的全局常量定义了没。 <br>
 * 参考： <br>
 * 1、https://umijs.org/zh-CN/config#define <br>
 * 2、https://webpack.docschina.org/plugins/define-plugin
 */
export default function checkUmiDefine() {
  for (const item of required) {
    if (!BLUE_REQUEST.hasOwnProperty(item)) {
      throw Error(`缺少 blue-request 所需必填配置 ${item}`);
    }
  }
}
