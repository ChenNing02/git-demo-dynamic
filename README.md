## 使用到的API

**setTimeout()**  设置一个定时器，到一定时间执行某段代码

- 语法： setTimeout(函数, 时间单位)

**setInterval()**  方法重复调用一个函数或执行一个代码段，在每次调用之间具有固定的时间延迟

- 语法：setInterval(code, delay)



## 做法教程

首先做一个最简单的显示123456789

代码：

```js
var result = '123456789'
var n = 0
var id = setInterval(()=>{

  n += 1
  document.body.innerHTML = result.substring(0, n)
  console.log('轮数增加')
  if(n >= result.length){
    window.clearInterval(id)
  }

},500)
```

然后再做代码显示，并把样式加到css中，此处需要用到 `pre` 标签 (全称 preview 预览)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
  <style id="styleTag"></style>
</head>
<body>
  <pre id="code"></pre>
</body>
</html>
```

JS

```js
var result = `/*
 * 以动画的形式显示代码
 *
 *
 */
* {
  transition: all 1s;
}
html {
  background: #f1f3f4;
  font-size: 16px;
}
#code {
  border: 1px solid red;
  padding: 20px;
}
`
var n = 0
var id = setInterval(()=>{
  n += 1
  code.innerHTML = result.substring(0, n)
  styleTag.innerHTML = result.substring(0, n)
  console.log('轮数增加')
  if(n >= result.length){
    window.clearInterval(id)
  }
},25)
```

代码加重的原理：将 pre 标签中的 html 替换为 `<span style="color:red;">html</span>`

```js
var result = `/*
 * 以动画的形式显示代码
 *
 *
 */
* {
  transition: all 1s;
}
html {
  background: #f1f3f4;
  font-size: 16px;
}
#code {
  border: 1px solid red;
  padding: 20px;
}
`
var n = 0
var id = setInterval(()=>{
  n += 1
  code.innerHTML = result.substring(0, n)
  code.innerHTML = code.innerHTML.replace('html', '<span style="color:red;">html</span>')
  styleTag.innerHTML = result.substring(0, n)
  console.log('轮数增加')
  if(n >= result.length){
    window.clearInterval(id)
  }
},25)
```

谷歌搜索 js syntax lib (高亮语法)

当前案例所用库：<https://prismjs.com/>

