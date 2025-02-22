# 前言

​

云函数可以让业务部署更快速更轻松，对于我来说，部署API非常方便，在以前API网关就担任了HTTP触发器的功能，不过在今年7月，API网关宣布了下架的消息，转而使用TSE云原生网关，不过对于我们业务量不大的用户来说，TSE的价格实在承担不起，而且很多功能也用不上

我们使用API网关的场景也就是路径，自定义域名，透传body，header，query等http参数，以及自定义验证等等功能，实际上，这些可以直接在业务函数里面集成。

函数本身自带一个触发URL，更多的还是纯为API设计的，因为不支持浏览器预览，而且唯一的作用就是触发函数仅此而已。

# 踩坑

函数的内容仅仅是返回event对象

```js
exports.main_handler =async (event, context) => {
      return event;
}
```

使用APIFox，能够正常返回响应

![请在此添加图片描述](https://developer.qcloudimg.com/http-save/yehe-3335308/7a99b0f971d2b0b1b89ae2fc830d16e8.png?qc_blockWidth=768&qc_blockHeight=598)

```json
{
    "body": "",
    "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "connection": "keep-alive",
        "token": "xxxxxxxxx",
        "user-agent": "Apifox/1.0.0 (https://apifox.com)",
        "x-scf-request-id": "52a7f5b2-xxxxxxx-xxxx-xxxxxxxx-525400df965c"
    },
    "httpMethod": "GET",
    "path": "/",
    "queryString": {}
}
```

但当使用浏览器发起`fetch/XHR`时，就出现错误了：

Access to fetch xxxxxxxxxxxxx from origin 'http://127.0.0.1:3000" has been blocked by CORS policy: Response to preflight request doesn't pass access control check: NoAccess-Control-Allow-Origin" header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

![请在此添加图片描述](https://developer.qcloudimg.com/http-save/yehe-3335308/3a6b3081a078d552e76df74f0c6ada1a.png?qc_blockWidth=527&qc_blockHeight=425)

意思就是浏览器被CORS拦了

# 问题和解决

## 产生的原因

具体产生的原因可以参考：[跨源资源共享（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)，[【秒杀】前端网络-CORS](https://cloud.tencent.com/developer/article/2403362)

简言之，浏览器判断CORS能否通过，就靠那几个靠响应头，简单请求时看`Access-Control-Allow-Origin`是否存在发送请求时的域，非简单请求时检查`Access-Control-Allow-Headers`，`Access-Control-Allow-Methods`，`Access-Control-Allow-Origin`等。

所以要能让浏览器正常请求，就需要函数返回能够让浏览器通过CORS检查的响应头。

## 云函数侧解决

云函数部分可以通过返回类似下图结构的内容，实现自定义参数的设置。

主要关注header部分

![请在此添加图片描述](https://developer.qcloudimg.com/http-save/yehe-3335308/108dbd139096e42c848605eb65d46523.png?qc_blockWidth=768&qc_blockHeight=306)

在返回时，带上这几个header，即可让浏览器通过CORS

这是一个示例，例如我想从`https://a.com`和`https://b.com`，给我的函数URL发送带有请求头`token`的，支持POST、PUT、GET的请求

```js
......
return {
   "statusCode": 200,
    "headers": {
        "Content-Type": "application/json",
        // CORS所需响应头
        "Access-Control-Allow-Origin": "https://a.com,https://b.com",
        "Access-Control-Allow-Methods": "POST,PUT,GET",
        "Access-Control-Allow-Headers": "token",
        // 其他需要响应回去的头
        "My-Header": "MyValue"
    },
    "body": JSON.stringify({
        "message": "Hello, world!"
    })
}
```

整个event函数如下：

```js
exports.main_handler = async (event, context) => {
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            // CORS所需响应头
            "Access-Control-Allow-Origin": "https://a.com,https://b.com",
            "Access-Control-Allow-Methods": "POST,PUT,GET",
            "Access-Control-Allow-Headers": "token",
            // 其他需要响应回去的头
            "My-Header": "MyValue"
        },
        "body": JSON.stringify({
            message: "Hello World"
        })
    }
}
```

这时，从浏览器侧调用fetch/XHR云函数的URL，就可以正常访问了

![请在此添加图片描述](https://developer.qcloudimg.com/http-save/yehe-3335308/5a404384ac2a595be869a2639a2a2b10.png?qc_blockWidth=470&qc_blockHeight=487)

关于响应头更多设置，可参考[HTTP 响应标头字段(MDN)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#http_%25E5%2593%258D%25E5%25BA%2594%25E6%25A0%2587%25E5%25A4%25B4%25E5%25AD%2597%25E6%25AE%25B5)

# 归纳总结

出现浏览器CORS报错的问题，十有八九是因为响应头出问题了，如果你是前端，看看发送的参数有没有问题，是否遵循公司内接口文档的规范；如果你是后端，看看给回去的响应头有没有给前端配置对应的CORS头。

# Reference

- [1] 跨源资源共享（CORS） [https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
- [2] 云函数URL概述 [https://cloud.tencent.com/document/product/583/96099](https://cloud.tencent.com/document/product/583/96099)