import Vue from 'vue';
import './demo.less';
import './autoprefixer.css';

// 注册
Vue.component('my-component', {
  template: '\
    <div>\
      <p>test demo</p>\
      <div>A custom component!</div>\
    </div>\
  '
});

// 创建根实例
new Vue({
  el: '#app'
});
