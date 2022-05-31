// // import './main.css';
// import './sass.scss';
// const a = 'Hello ITEM'
// console.log(a)
// module.exports = a;


// import './sass.scss'
// import logo from '../public/logo.png';//没有使用webpack对图片文件进行处理时，这种引入会报错，提示使用loader处理

// import './fonts/iconfont.css';

// const a = 'Hello ITEM'
// console.log(a)

// const img = new Image();
// img.src = logo

// document.getElementById('div').appendChild(img)


// ES6:
import './main.css';
import './sass.scss'
import logo from '../public/logo.png'
import './fonts/iconfont.css'
const img = new Image();
img.src = logo

document.getElementById('div').appendChild(img)
class Author {
  name = 'ITEM'
  age = 18
  email = 'lxp_work@163.com'

  info =  () => {
    return {
      name: this.name,
      age: this.age,
      email: this.email
    }
  }
}


module.exports = Author

const fn = () => {}
const arr1 = [1, 2, 3]
const arr2 = [...arr1];
new Promise(() => {})

// 新增装饰器的使用
@log('hi')
class MyClass { }

function log(text) {
  return function(target) {
    target.prototype.logger = () => `${text}，${target.name}`
  }
}

const test = new MyClass()
test.logger()

