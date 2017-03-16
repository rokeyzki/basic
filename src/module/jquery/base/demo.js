import './postcss.css';
import './test.scss';

import fooJson from './foo.json';

console.dir(fooJson);

const showWidth = $(window).width();
const showHeight = $(window).height();
console.log(`当前窗口可视宽度为：${showWidth} px`);
console.log(`当前窗口可视高度为：${showHeight} px`);

// const fooNode = document.querySelector('#foo');
// console.dir(fooNode);
// fooNode.style.setProperty('width', `${showWidth}px`);
// fooNode.style.setProperty('height', `${showHeight}px`);

$('#foo').css('width', `${showWidth}px`).css('height', `${showHeight}px`);
