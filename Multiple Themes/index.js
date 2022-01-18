/*
 * @Author        : ryuusennka
 * @Date          : 2022-01-18 13:50:38
 * @LastEditors   : ryuusennka
 * @LastEditTime  : 2022-01-18 14:49:12
 * @FilePath      : /my-fe-project/Multiple Themes/index.js
 * @Description   :
 */

function selectColor(color) {
  document.body.setAttribute('data-theme-color', color);
  Cookies.set('data-theme-color', color);
}
function selectMode(mode) {
  document.body.setAttribute('data-theme-mode', mode);
  Cookies.set('data-theme-mode', mode);
}
function selectSize(size) {
  document.body.setAttribute('data-theme-size', size);
  Cookies.set('data-theme-size', size);
}

(() => {
  if (Cookies.get('data-theme-color')) document.body.setAttribute('data-theme-color', Cookies.get('data-theme-color'));
  if (Cookies.get('data-theme-mode')) document.body.setAttribute('data-theme-mode', Cookies.get('data-theme-mode'));
  if (Cookies.get('data-theme-size')) document.body.setAttribute('data-theme-size', Cookies.get('data-theme-size'));
})();
