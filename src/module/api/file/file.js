import AV from '../leancloud/config';

const buttonInput = document.getElementById('button');
const fileInput = document.getElementById('file');

buttonInput.addEventListener('click', () => {
  console.dir(fileInput.files);

  if (fileInput.files.length > 0) {
    const localFile = fileInput.files[0];

    const fileAV = new AV.File(localFile.name, localFile);
    fileAV.save().then((file) => {
      // 文件保存成功
      console.info('上传成功，返回文件地址：', file.url());
    }, (error) => {
      // 异常处理
      alert();
      console.error('上传失败', error);
    });
  } else {
    console.warn('请选择要上传的文件');
  }
});
