/**
 * 获取数据流
 */
import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import request from 'umi-request';

export default () => {
  function download() {
    request('/get-data-stream', {
      method: 'POST',
      // 重要
      responseType: 'blob',
    }).then(res => {
      const blob = new Blob([res]);
      const objectURL = URL.createObjectURL(blob);
      let btn = document.createElement('a');
      btn.download = '文件.docx';
      btn.href = objectURL;
      btn.click();
      URL.revokeObjectURL(objectURL);
      btn = null;
    });
  }
  return (
    <>
      <Button type="primary" onClick={download}>
        下载文件
      </Button>
    </>
  );
};
