/* eslint-disable */

// const stylelint = require('stylelint');
const autoprefixer = require('autoprefixer'); // 补全浏览器前缀
const cssgrace = require('cssgrace'); // 生成兼容旧浏览器的各种 Hack、提供 CSS3 Polyfill
const cssnano = require('cssnano'); // CSS 压缩合并

module.exports = {
  plugins: [
    // stylelint,
    autoprefixer,
    cssgrace,
    new cssnano({ zindex: false }),
  ],
};
