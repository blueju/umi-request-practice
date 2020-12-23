import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import request from 'umi-request-practice';

export default () => {
  function handleSendRequest() {
    request('').then(res => {
      console.log(res);
    });
  }
  return (
    <>
      <Button type="primary" onClick={handleSendRequest}>
        发送请求
      </Button>
    </>
  );
};
