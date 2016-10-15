// 函数绑定运算符"::" 是 es7 的方案 
const add = function (x,y) {
    return x*this.m + y*this.n;
};

const obj = {
    m: 1,
    n: 2
};

// var newAdd = add.bind(obj, 3); // 即设置x=3
const newAdd = obj::add;

console.dir(newAdd(3, 4));

