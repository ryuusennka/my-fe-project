/*
 * @Author        : ryuusennka
 * @Date          : 2022-01-18 16:03:20
 * @LastEditors   : ryuusennka
 * @LastEditTime  : 2022-01-28 18:23:33
 * @FilePath      : /my-fe-project/generateIndex.js
 * @Description   :
 */

const fs = require('fs');
const path = require('path');
// const rootPath = path.join(__dirname);

const config = {
  '[demo]Multiple Themes': '主题切换',
  '[demo]css position sticky': 'css position sticky 粘性位置',
  '[demo]download table to csv': '下载表单数据为 csv 文件',
};
const generateIndex = config => {
  const paths = [];
  for (var item in config) {
    paths.push(`<li><a href="${item}">${config[item]}</a></li>`);
  }
  return paths.join('');
};

const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
  ${generateIndex(config)}
  </ul>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), template, { encoding: 'utf8' });
