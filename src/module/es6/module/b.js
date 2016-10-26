import { name as myName, year } from './a';

const moduleB = {
  name: myName,
  year,
  getInfo() {
    return `${myName}: ${year}`;
  },
};

export default moduleB; // 如果模块只有一个输出值，就使用export default，否则使用export {one, two, three}
