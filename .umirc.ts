interface IBlueRequest {
  /** 开发环境是否开启 mock */
  mock: boolean;
  /** 请求基础 url */
  baseUrl: string;
}

export default {
  title: 'umi-request-practice',
  favicon: './favicon.png',
  logo: './logo.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  define: {
    /**
     * blue-reuqest 所需的一些全局常量定义。<br>
     * 参考：<br>
     * 1、https://umijs.org/zh-CN/config#define<br>
     * 2、https://webpack.docschina.org/plugins/define-plugin
     */
    BLUE_REQUEST: {
      mock: false,
      baseUrl: '',
    } as IBlueRequest,
  },
};
