const plain = {
  name: 'charles',
};
const proxy = new Proxy(plain, {
  get(target, property) {
    return property in target ? target[property] : `error: proxy对象不存在属性[${property}]`;
  },
});

console.log(proxy.name); // "charles"
console.log(proxy.title); // "rokeyzki"
