import AV from '../leancloud/config';

const currentUser = AV.User.current();
console.log(currentUser);
if (currentUser) console.info(`当前已登录用户：${currentUser.get('username')}`);

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
      alert(`注册成功，注册用户：${loginedUser.get('username')}`);
      username.value = password.value = email.value = null;
    }, (error) => {
      console.error(error);
      alert('注册失败，服务端异常');
    });
  } else {
    alert('注册信息不完整');
  }
}, false);
