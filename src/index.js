// // import './main.css';
// import './sass.scss';
// const a = 'Hello ITEM'
// console.log(a)
// module.exports = a;


import './sass.scss'
import logo from '../public/logo.png';//没有使用webpack对图片文件进行处理时，这种引入会报错，提示使用loader处理

import './fonts/iconfont.css';

const a = 'Hello ITEM'
console.log(a)

const img = new Image();
img.src = logo

document.getElementById('div').appendChild(img)
