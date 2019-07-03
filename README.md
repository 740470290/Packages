# Packages
自己封装的js包
## window.ajax=(function () {return {...需要返回的方法}})()
## 区别于window.ajax={},这个里面的所有属性,方法都暴露出去了,然而使用闭包的模式,可以控制暴露出去的内容.更加合理
### ajax,example
属性:  
url: 配置全局地址,用于单页应用.多页进入源码配置  
方法:
```javascript
/**
   * get
   * @param url
   * @param data (可选)
   * @param callback 返回对象类型
   */
ajax.get('/',{id:1,name:'tom'},function(res) {
  console.log(res)
})
/**
   * post
   * @param url.
   * @param data 有两种类型,一是对象,二是表单document.forms[0],表单可以实现文件上传
   * @param callback 返回对象类型
   */
ajax.post('/',{id:1,name:'tom'},function(res) {
  console.log(res)
})
/**
   * jsonp
   * @param url
   * @param callback 返回对象类型
   */
ajax.jsonp('/', function(res) {
  console.log(res)
})

```

