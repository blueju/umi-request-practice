import fs from 'fs';
import path from 'path';

export default {
  'POST /get-data-stream': (req, res) => {
    // 文件流读取，写入响应对象
    fs.createReadStream(path.resolve(__dirname, './新建 DOCX 文档.docx')).pipe(
      res,
    );
  },
};
