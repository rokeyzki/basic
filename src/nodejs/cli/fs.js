var fs = require('fs');

// 创建文件数据, 文件不存在会自动创建
fs.writeFile('./123.txt', 'Hello Node.js\n', function (err) {
  if (err) throw err;
  console.log('文件数据创建完成');

  // 添加文件数据
  fs.appendFile('./123.txt', '添加数据，默认 utf8 格式\n', function (err) {
    if (err) throw err;
    console.log('文件数据添加完成');

    // 读取文件数据
    fs.readFile('./123.txt', function (err, data) {
      if (err) throw err;
      console.log(data.toString());

      // 查看文件状态
      fs.stat('./123.txt', function (err, stat) {
        if (err) throw err;
        console.log('文件数据体积：' + stat.size + ' b');
      });

      // 删除文件
      fs.unlink('./log-123.txt', function(){
        console.log('日志删除完成');
      }) ;

      // 监听文件更改
      fs.watchFile('./123.txt', function (curr, prev) {
        console.log('the current mtime is: ' + curr.mtime); // curr 为fs.Stats 实例
        console.log('the previous mtime was: ' + prev.mtime); // prev 为fs.Stats 实例

        // 判断文件是否存在
        fs.exists('./log-123.txt', function (exists) {
          if(!exists) {
            // 创建文件数据, 文件不存在会自动创建
            fs.writeFile('./log-123.txt', '更新时间：' + curr.mtime + '\n', function (err) {
              if (err) throw err;
              console.log('日志创建完成');
            });
          } else {
            // 添加文件数据
            fs.appendFile('./log-123.txt', '更新时间：' + curr.mtime + '\n', function (err) {
              if (err) throw err;
              console.log('日志添加完成');
            });
          }
        });
      });

    });

  });

});
