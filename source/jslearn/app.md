---
title: Ar-Sr-Na Javascript 实践 | 博客站
date: 2021-07-05 23:31:15
author: Ar-Sr-Na
avatar: 'https://res.arsrna.cn/icon2.jpg'
authorLink: https://www.arsrna.cn
authorAbout: 微博Ar-Sr-Na；只做正经视频；粉丝群571912431；邕城漫展，使命必达，个人网站www.arsrna.cn
authorDesc: 微博Ar-Sr-Na；只做正经视频；粉丝群571912431；邕城漫展，使命必达，个人网站www.arsrna.cn
categories: 技术
comments: true
tags: 
keywords: JavaScript,学习
description: 与java完全不同
photos: 'https://www.arsrna.cn/images/DSC08095_cop.jpg'
---
# 制作一个考场时钟

首先，这个时钟要能刷新时间，显示正确，也要显示科目

完工后大概长这样子：

![](https://www.arlearn.ltd/javascript/docs/images/app-7-5/mpfyn70nam.png)

整体只有简单的几部分：

| 内容 | 实现方式 |
|:----|:----|
| 标语 | `<h1 class="display-1">`标签 |
| 时间 | 利用setInterval() 以及date()对象进行更新时间 |
| 科目 | 进行更新时间的同时不断判断科目与时间是否对准 |
| 装饰 | 花里胡哨，符合考场要求就行 |


## 准备部分

为了美观，这里使用bootstrap css：

首行加入：`<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" rel="stylesheet">`

这里建议保存为本地css，然后更改路径，毕竟有些考场没通网

## 内容

整个内容要包括在一个容器，不仅美观也方便布局，我使用jumbotron，container两个组件

```html
<div class="jumbotron container">
```

再在里面添加基本的控件即可

## 标语

因为它24小时都不变，所以用静态标签就好

bootstrap的alert就很不错

```html
<div class="alert alert-danger" role="alert">
<h3 id="title1">遵守纪律，认真考试</h3>
</div>
```

## 核心部分：时间与科目

### 时间的刷新

JavaScript可以动态控制DOM，之前也有讲过 [开始第一个项目-hello world](https://www.arlearn.ltd/javascript/docs/#/?id=%e5%bc%80%e5%a7%8b%e7%ac%ac%e4%b8%80%e4%b8%aa%e9%a1%b9%e7%9b%ae-hello-world)[ | arlearn.ltd](https://www.arlearn.ltd/javascript/docs/#/?id=%e5%bc%80%e5%a7%8b%e7%ac%ac%e4%b8%80%e4%b8%aa%e9%a1%b9%e7%9b%ae-hello-world)

首先建立一个div用于显示时间（为了放大字号设置了font-size: 1000%）

要设置好id，这里为time

```html
<h1 class="display-1" style="font-size: 1000%" id="time"></h1>
```

利用js的Date()对象显示时间，其基本方法参考：[JavaScript Date 参考手册 (w3school.com.cn)](https://www.w3school.com.cn/jsref/jsref_obj_date.asp)

这里使用getHours()，getMinutes()，getSeconds()

首先新建一个对象，并赋值

```js
var time = new Date()
```

然后变成 小时：分钟：秒 的形式

```js
var timeStr = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
```

最后更改DOM：

```js
document.getElementById('time').innerHTML=timeStr
```

为了让时间自动刷新，用setInterval来一秒刷新一次：结合起来就是这样

```js
setInterval(function() {
var time = new Date();
var timeStr = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
document.getElementById('time').innerHTML = timeStr
},1000)//这里是毫秒
```

这时候回到浏览器，时间就会自己刷新了，只不过个位数的时候只能显示一位，鉴于判断比较复杂，我就懒得整了

### 科目的改变

既然是实用教程，那就实用些，让电脑自己判断自动改变

目前实现的方法如下，

Reference/参考：[【教程】纯前端做一个歌词显示的音乐播放器 | Ar-Sr-Na 博客站 (arsrna.ltd)](https://www.arsrna.ltd/posts/08-1202L-08-1203K/#%E5%8C%B9%E9%85%8D%E9%9F%B3%E9%A2%91%E5%92%8C%E6%AD%8C%E8%AF%8D%E6%97%B6%E9%97%B4%E7%82%B9)

不断遍历时间数组来匹配科目，首先新建一个json文件：建议使用Excel再转json：

[在线Excel、CSV转JSON格式-BeJSON.com](https://www.bejson.com/json/col2json/)

要注意，这里的time一定要和timeStr格式一样，个位数的时候只能显示一位，这里也要严格对照

| time | subject |
|:----|:----|
| 23:0:0 | 熬夜 |
| 23:15:0 | 写代码 |
| 23:20:0 | 求求你们 |
| 23:21:0 | 给个支持吧 |
| 23:22:0 | Ar-Sr-Na |
| 23:23:0 | 我永远喜欢御坂美琴 |


```json
[
{"time":"23:0:0","subject":"熬夜"},
{"time":"23:15:0","subject":"写代码"},
{"time":"23:20:0","subject":"求求你们"},
{"time":"23:21:0","subject":"给个支持吧"},
{"time":"23:22:0","subject":"Ar-Sr-Na"},
{"time":"23:23:0","subject":"我永远喜欢御坂美琴"},
]
```

时间流动的同时不断查找数组遍历数组，匹配科目

但是注意，我们最好把 时：分：秒 的格式换为js读得出来的格式，秒，也就是num类

Excel中很好处理

| h | m | s | time | subject |
|:----|:----|:----|:----|:----|
| 23 | 0 | 0 | 82800 | 熬夜 |
| 23 | 1 | 0 | 82860 | 写代码 |
| 23 | 2 | 0 | 82920 | 求求你们 |
| 23 | 5 | 0 | 83100 | 给个支持吧 |
| 23 | 33 | 33 | 84813 | Ar-Sr-Na |
| 23 | 33 | 34 | 84814 | 我永远喜欢御坂美琴 |


```json
[{"time":82800 ,"subject":"熬夜"},
{"time":82860 ,"subject":"写代码"},
{"time":82920 ,"subject":"求求你们"},
{"time":83100 ,"subject":"给个支持吧"},
{"time":84813 ,"subject":"Ar-Sr-Na"},
{"time":84814 ,"subject":"我永远喜欢御坂美琴"},]
```

除此之外，我们的js时间也要进行更改，另外赋值一个变量

```js
var timeJS = (time.getHours()*3600)+(time.getMinutes()*60)+time.getSeconds();
```

然后可以继续了

给json赋值

```javascript
var subject = xxx(刚刚那一段)
```

```js
for(i1=0;i1<subject.length;i1++) {
    if (timeJS > subject[i1].time) {
   //改变科目的dom
    }
   }
```

当匹配到时改变科目：

```html
科目组件：<h2 id="subject">当前科目：语文</h2>
```

```js
document.getElementById('subject').innerHTML =
```

## 总代码

HTML：

```html
<div class="jumbotron container">
  <!--script type="text/javascript" src="https://api.xygeng.cn/one/get/"></script-->
  <div class="alert alert-danger" role="alert">
    <h3 id="title1">遵守纪律，认真考试</h3>
  </div>
  <h1 class="display-1" style="font-size: 1000%" id="time">
  </h1>
  <div class="alert alert-primary" role="alert">
    <h2 id="subject">当前科目：语文</h2>
  </div>
  <p>Copyright © Ar-Sr-Na. All rights reserved.</p>
</div>
```

```js
subject = [{"time":82800 ,"subject":"熬夜"},
{"time":82860 ,"subject":"写代码"},
{"time":82920 ,"subject":"求求你们"},
{"time":83100 ,"subject":"给个支持吧"},
{"time":84813 ,"subject":"Ar-Sr-Na"},
{"time":84814 ,"subject":"我永远喜欢御坂美琴"},]

setInterval(function() {
var time = new Date();
var timeStr = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
document.getElementById('time').innerHTML = timeStr;

var timeJS = (time.getHours()*3600)+(time.getMinutes()*60)+time.getSeconds();
for(i1=0;i1<subject.length;i1++) { 
if (timeJS > subject[i1].time) {
document.getElementById('subject').innerHTML = subject[i1].subject
//改变科目的dom
  }
 }
   
},1000)
```

DEMO地址：[考场时钟 | Ar-Learning](https://codepen.io/arsrna/pen/YzVwZWG)

# 制作一个广播系统

未完待续