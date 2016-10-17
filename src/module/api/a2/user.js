import AV from '../leancloud/config';

let currentUser = AV.User.current();
console.log(currentUser);

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');

const button = document.querySelector('#button');
button.addEventListener('click', () => {
  if (username.value && password.value && email.value) {
    // 新建 AVUser 对象实例
    const user = new AV.User();
    // 设置用户名
    user.setUsername(username.value);
    // 设置密码
    user.setPassword(password.value);
    // 设置邮箱
    user.setEmail(email.value);
    user.signUp().then((loginedUser) => {
      console.dir(loginedUser);
    }, (error) => {
      console.error(error);
      alert('注册失败，服务端异常');
    });
  } else {
    alert('注册信息不完整');
  }
}, false);

const buttonOut = document.querySelector('#buttonOut');
buttonOut.addEventListener('click', () => {
  AV.User.logOut();

  currentUser = AV.User.current();
  console.log(currentUser);

  alert('退出成功');
}, false);
