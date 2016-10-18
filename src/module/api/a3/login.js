import AV from '../leancloud/config';

let currentUser = AV.User.current();
console.log(currentUser);
if (currentUser) console.info(`当前已登录用户：${currentUser.get('username')}`);

const username = document.querySelector('#username');
const password = document.querySelector('#password');

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', () => {
  if (username.value && password.value) {
    AV.User.logIn(username.value, password.value).then((loginedUser) => {
      console.dir(loginedUser);
      alert(`登录成功，当前用户：${loginedUser.get('username')}`);
      username.value = password.value = null;
    }, (error) => {
      console.dir(error);
      alert(`登录失败，错误信息：${error.message}`);
    });
  } else {
    alert('登录信息不完整');
  }
}, false);

const buttonLogout = document.querySelector('#button-logout');
buttonLogout.addEventListener('click', () => {
  AV.User.logOut();

  currentUser = AV.User.current();
  console.log(currentUser);

  alert('退出成功');
}, false);
