/**
 * 全局常量检查
 */
export const globalDefineCheck = () => {
  if (!GLOBAL_DEFINE_UMI_REQUEST_PRACTICE.baseUrl) {
    throw new Error('缺少接口基础地址。');
  }
};
