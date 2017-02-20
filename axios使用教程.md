---
title: axios使用教程
date: 2017年2月20日20:17:57
tags: "axios"
categories: "axios"

---


>Axios 是一个基于 promise 的 HTTP 库，可以工作于浏览器中，也可以在 node.js 中使用，提供了一个API用来处理 XMLHttpRequests 和 node 的 http 接口


### 基本操作

- GET

```
axios.get('https://www.baidu.com' + username)
  .then(function(response){
    console.log(response.data); 
    console.log(response.status); 
  })
  .catch(function(err){
  	console.log(err);
  });  

```
- POST

```
axios.post('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
  .then(function(response){
    console.log('saved successfully');
  })
  .catch(function (err) {
    console.log(err);
  });  

```

除了 get/post，还可以请求 delete,head,put,patch

### 同时执行多个请求

```
axios.all([
    axios.get('https://api.github.com/xxx/1'),
    axios.get('https://api.github.com/xxx/2')
  ])
  .then(axios.spread(function (userResp, reposResp) {
    // 上面两个请求都完成后，才执行这个回调方法
    console.log('User', userResp.data);
    console.log('Repositories', reposResp.data);
  }));

```

当所有的请求都完成后，会收到一个数组，包含着响应对象，其中的顺序和请求发送的顺序相同，可以使用 axios.spread 分割成多个单独的响应对象

### 自定义请求头

```
var config = {
  essay-headers: {'X-My-Custom-Header': 'Header-Value'}
};

axios.get('https://api.github.com/users/xxx', config);
axios.post('/save', { firstName: 'Marlon' }, config);

```

### 拦截器

可以在 then 或者 catch 之前对 requests/responses 进行拦截处理

添加

```
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});

```

移除

```
axios.interceptors.request.eject(myInterceptor);
```