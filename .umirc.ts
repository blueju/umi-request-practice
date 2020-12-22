import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'umi-request-practice',
  favicon: './public/favicon.png',
  logo: './public/logo.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  define: {
    // 全局常量配置
    // https://umijs.org/zh-CN/config#define
    // https://webpack.docschina.org/plugins/define-plugin
    GLOBAL_DEFINE_UMI_REQUEST_PRACTICE: {
      // 是否开启 Mock，生产环境无效
      mock: false,
      // 接口基础地址
      baseUrl: '',
    },
  },
});
