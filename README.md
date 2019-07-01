# Packages
自己封装的js包
## window.ajax=(function () {return {...需要返回的方法}})()
## 区别于window.ajax={},这个里面的所有属性,方法都暴露出去了,然而使用闭包的模式,可以控制暴露出去的内容.更加合理
### ajax,example
```sh
$.get("http://172.17.14.250/",function (res) {
    console.log(res)
})

$.post("http://172.17.14.250/",{id:1,name:'tom'},function (res) {
    console.log(res)
})

$.jsonp("http://172.17.14.250/",function (res) {
    console.log(res)
})
```

