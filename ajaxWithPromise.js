// const baseURL = 'http://192.168.2.3:9527/yqdz/djdocument/authentication-center-ms/authentication/formLogin.do?username=17372798546&password=123456'
const baseURL = 'http://127.0.0.1:8888'
function ajax(url, data = {}, config = true){
    return new Promise((resolve, reject) => {
        const x = new XMLHttpRequest();
        x.open('POST', baseURL+url, true);
        x.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        config&&x.setRequestHeader("Authorization","Basic eXFkei1kamRvY3VtZW50OmFwcDEyMzQ1Ng==");
        x.send();
        x.onreadystatechange = function () {
        if (x.readyState === 4 ) {
          if(x.status === 200){
              resolve(JSON.parse(x.response))
          }else{
              reject('Network Error')
          }
        }
        }
    })
}
ajax('',{},false).then(res=>{
    console.log(res)
}).catch(err=>console.log(err))
