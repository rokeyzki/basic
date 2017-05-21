## 生命周期函数小记

### 初次渲染
* constructor
    * 格式化props
    * 初始化state
    * if(redux) isMonuted = true;

* componentWillMount
    * if(redux) Store.subscribe
    * if(isMonuted) setState

* render
    * 渲染

* if(async) componentDidMount
    * fetch + 格式化state + setState
    * if(redux) 异步action

### 重现渲染
* customSyncFunction
  * setState
  * if(redux) action

* customAsyncFunction
  * fetch + 格式化state + setState
  * if(redux) 异步action

* shouldComponentUpdate
    * 禁止setState
    * nextProps
    * nextState

* componentWillUpdate
    * 禁止setState
    * 重现渲染前执行

* render
    * 渲染

* componentDidUpdate
    * 重现渲染后执行

### 移除渲染
* componentWillUnmount
    * if(redux) isMonuted = false;

## 其他补充

### redux
* 只适用于设置全局state的时候

### action
* 只适用于修改全局state的时候
