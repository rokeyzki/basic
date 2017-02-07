#!/usr/bin/env node

var program = require('commander');
var inquirer = require('inquirer');
require('colors-cli/toxic');

program
  .version('1.0.5')
  .description('简介：******')
  .option('-1, --example1', '一个简单的示例')
  .option('-2, --example2 [argu]', '带选填参数的示例')
  .option('-3, --example3 <argu>', '带必填参数的示例')
  .option('-4, --example4 <argu1,argu2,...>', '多参数的示例，如 a,b,c 以逗号区隔', function(val) {
    return val.split(',');
  })
  .option('-5, --example5', 'colors-cli/toxic 的使用示例')
  .option('-6, --example6', 'inquirer 的使用示例')
  .option('-f, --file', 'node fs 的使用示例');

// 子命令，类型一
program
  .command('child1')
  .alias('c1')
  .description('简介：子命令 child1 的简介')
  .option("-a, --optionA", "选项一")
  .option("-b, --optionB [argu]", "选项二")
  .option("-c, --optionC <argu>", "选项三")
  .action(function(dir){
    if(dir.optionA) console.log('optionA: %s', dir.optionA);
    if(dir.optionB) console.log('optionB: %s', dir.optionB);
    if(dir.optionC) console.log('optionC: %s', dir.optionC);
  });

// 子命令，类型二
program
  .command('child2 <argu> [otherArgu...]')
  .alias('c2')
  .description('简介：子命令 child2 的简介')
  .action(function (dir, otherDirs) {
    console.log('c2 %s', dir);

    if (otherDirs) {
      otherDirs.forEach(function (oDir) {
        console.log('-- %s', oDir);
      });
    }
  });

// 默认不传参数时输出help
if (!process.argv[2]) {
  program.help();
}

// End
program.parse(process.argv);

if (program.example1) {
  console.log('hello node');
}

if (program.example2) {
  console.log('hello ' + program.example2);
}

if (program.example3) {
  console.log('hello %s', program.example3);
}

if (program.example4) {
  program.example4.forEach(function (val) {
    console.log('hello %s', val);
  });
}

if (program.example5) {
  console.log('hello node'.cyan.blue_b.underline);
}

if (program.example6) {
  var promps = [{
    type: 'list',
    name: 'myCssPretreatment',
    message: '想用什么css预处理器呢',
    choices: [
      {
        name: 'Sass',
        value: 'sass'
      },
      {
        name: 'Less',
        value: 'less'
      }
    ]
  },{
    type: 'input',
    name: 'myModuleName',
    message: '请输入模块名称',
    validate: function (input){
      if(!input) {
        return '不能为空'
      }
      return true
    }
  }];

  inquirer.prompt(promps).then(function (answers) {
    console.dir(answers)
  })
}

if (program.file) {
  
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

}
