/* globals React, ReactDOM */
import { LikeButton } from './like-button';
import '../styles/index.scss';

console.log('webpack starterkit');

// function Func1 () {
//   this.name = 'FUNC';
//   console.log('this.name:', this.name);
// }
// class Func2 {
//   constructor () {
//     this.name = 'FUNC_2';
//     console.log('this.name:', this.name);
//   }
//   hello () {
//     console.log('hello', this.name);
//   }
// }

// Func2.prototype.hello2 = function ( ) {
//   console.log('hello2', this.name);
// };

function Func3 () {
  // nothing todo
}

Func3.name2 = 'abc';

const fn3 = Func3.prototype;
fn3.name = 'FUNC_3';
fn3.hello = function () {
  console.log(this.name, '.name:', this.name);
  console.log(this.name, '.name2:', this.name2);
  console.log(this.name, '.name3:', this.name3);
};

// const instance1 = new Func1();
// const instance2 = new Func2();
const instance3 = new Func3();
instance3.name3 = 'bbb';

// console.log('instance1.name:', instance1.name);
// console.log('instance2.name:', instance2.name);
// console.log('instance3.name:', instance3.name);
// instance2.hello2();
// instance3.hello();
const { hello } = instance3;
const hello2 = hello.bind(instance3);

hello2.call(Func3);
// console.log(instance3.__proto__);

document.addEventListener('DOMContentLoaded', () => {
  // console.log('document ready! by DOMContentLoaded')
  const domContainer = document.querySelector('#app');
  const root = ReactDOM.createRoot(domContainer);
  root.render(React.createElement(LikeButton));
});

