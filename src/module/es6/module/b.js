import { name as aName, sex, year } from './a';

const moduleB = {
  name: aName,
  year,
  getInfo() {
    return `${aName}: ${sex} ${year}`;
  },
};

export default moduleB; // 如果模块只有一个输出值，就使用export default，否则使用export {one, two, three}
