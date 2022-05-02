---
title: Ar-Sr-Na Javascript Learn 博客站
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

# Ar-Sr-Na JavaScript Learn项目

节目编号：[08-1202K/08-1203J]：Ar-Sr-Na JavaScript Learn项目

!> 2021-5-16 注意js与java为老婆与老婆饼的关系！

### 项目在不断完善中，希望大家多多支持：QQ群：1097347557 <!-- {docsify-ignore-all} -->

# 准备

## 编辑软件

推荐 [Sublime](https://www.sublimetext.com/) | [VS Code（推荐）](https://code.visualstudio.com/)

### 如何选择编辑器？

首先这个编辑器要能够符合代码的习惯，比如在该换行的地方换行，高亮的地方高亮，括号成对打，引号也要成对打，必要时还自带格式化功能，纠错功能，并且对方法名有定位，哪里用了它，用它来做什么，这样效率会成倍提升

高亮对不对？字体是不是等宽等高字体？有高亮，不仅能让代码可读性提升，对一些错误，例如少打了引号括号，正则表达式等问题都可以快速定位；等宽等高字体，能让代码整齐划一，阅读起来也顺眼

## 调试软件

推荐 Chrome | Edge | Firefox Developer Edition
JavaScript和其他语言一样，有一个控制台，运行在浏览器，电脑端按下F12打开开发者工具，点击Console或控制台就看见了

JavaScript执行代码的地方：浏览器 | 服务端node.js | 其他app

想要运行代码，就必须有个平台，这里推荐使用Edge
直接在浏览器栏输入：javascript:这里是你的代码
就可以直接运行

如果是.js文件，必须依靠DOM，不推荐直接拖入浏览器，有两种方式：引入 | 嵌入
引入：

````html
<script src=".js的路径"></script>
````

嵌入：

````html
<script>
代码
</script>
````

# 开始第一个项目-hello world

JavaScript输出消息的方式：控制台输出 | 控制DOM输出 | 弹窗/用户控制输出
我们选择从控制台输出：console方法

````js
console.log('这里输入内容');
````

![](images/p1/console.png)

按下F12在控制台输入 console.log('这里输入内容');
或直接在浏览器地址栏输入 javascript:console.log('这里输入内容');
就可以看到输出了

除此之外，还有弹窗

````js
alert('弹窗内容')
````

![](images/p1/alert.png)

如果是嵌入到html文档，控制DOM：

````html
<p id="text">测试</p>
````

![](images/p1/text1.png)

我们想让这段文字变成“我永远喜欢御坂美琴”
就要用到document控制dom对象
常见方法有：

| 方法 | 描述 |
| --- | --- |
| close() | 关闭用 document.open() 方法打开的输出流，并显示选定的数据。 |
| getElementById() | 返回对拥有指定 id 的第一个对象的引用。 |
| getElementsByName() | 返回带有指定名称的对象集合。 |
| getElementsByTagName() | 返回带有指定标签名的对象集合。 |
| open() | 打开一个流，以收集来自任何 document.write() 或 document.writeln() 方法的输出。 |
| write() | 向文档写 HTML 表达式 或 JavaScript 代码。 |
| writeln() | 等同于 write() 方法，不同的是在每个表达式之后写一个换行符。 |

首先要获取这段html的dom，可以看到我给他定义了id="text"
所以我们就用获取id的方法-getElementById('控件id')
获取到了dom，就要修改dom，`<p></p>`里面的标签就是显示出来的内容，可以是innerText（里面的文字），如果里面不内嵌其他元素，也可以是innerHTML（标签里的内容）

我们使用innerHTML = '文字'

在这段html里插入

````html
<script>
document.getElementById('text').innerHTML = '我永远喜欢御坂美琴';
</script>
````

![images/p1/text2.png]()

刷新浏览器看看，效果出来了

# 更新日志

## 文档更新!

2021-2-26 项目建立

2021-5-16 项目开始编辑
2021-5-16 完成第一章节
2021-7-15 完成最佳实践