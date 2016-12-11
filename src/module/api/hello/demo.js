import AV from '../leancloud/config';

const TestObject = AV.Object.extend('TestObject');
const testObject = new TestObject();
testObject.save({
  words: 'Hello World!',
}).then((object) => {
  console.dir(object);
  alert('LeanCloud Rocks!');
});
