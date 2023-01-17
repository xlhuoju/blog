---
layout: posts
title: 【Blender】如何使用Festivity方案一键三渲二 - FBX版本
date: 2023-01-17 14:03:45
tags: 渲染,shader,blender,原神,三渲二,NPR
avatar: 'https://res.arsrna.cn/icon2.jpg'
authorLink: www.arsrna.cn
authorAbout: 突破计算边界，构筑数字视界，www.arsrna.cn
authorDesc: 突破计算边界，构筑数字视界，www.arsrna.cn
categories: 技术
comments: true
keywords: 渲染,shader,blender,原神,三渲二,NPR
description: 快速使用Festivity的shader实现仿原神渲染。
index_img: 'https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/u453bn69cp.png'
---
# 导言

## 何为三渲二

三渲二就是2d风格的3d渲染

## 三渲二有什么奇功

减少阴影计算，使得光照扁平化，画风类似日本二维动画

> 相比普通二维与三维动画，三渲二的优势就在于可以既能保持二维动画的美术风格，同时减轻画师的工作负担，缩减制作成本和周期，同时也具备自由的运镜方式。目前三渲二动画在包括动画产业大国日本在内的国外市场上已经成为了一个单独的品类，这足以说明它对行业发展的重要程度。

若直接使用3d渲染，需要考虑场景光照是否真实，人物面部光线，全局光，光线追踪等等，同时受限于计算机动画，难以模拟真实人物的动作神态等，容易引发恐怖谷效应。

![BV1qJ411n7w8](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/uxo1s4g0iq.png)

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/zs31yhh0x5.png)

如果使用三渲二效果，则减轻了很大部分的光照计算负担，画风也很容易接受

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/0j9614jom0.png)

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/u453bn69cp.png)

## 效果实例

3D渲染-cycles

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/ovppd7bphi.png)

Its Splash by Piotr Krynski

三渲二 Ar-Sr-Na mmd

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/lcnphgvyir.png)

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/uhb5j8lgti.png)

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/7d34ju3be7.png)

三渲二具体原理，此处不再介绍，简单地说，就是无阴影，削除阴影让其看起来很像日式动画

---

# 准备

众所周知，我的观众游泳技术不好，没办法游到海外去看youtube上的教程，而我擅长游泳，所以特地去学了这个教程为大家转述

注意：由于插件限制，blender仅支持3.1以上版本，此处使用blender3.4

教程内有两种办法用于三渲二，作者建议请先粗略阅读一遍再考虑哪种方法，不然边看边做到中途发现不行就完蛋了。

festivity效果类似米哈游原神中的渲染效果，而米哈游实现该效果引用了Lightmap也就是ILM贴图，如果没有需要手动绘制。

## 软件

blender 3.4 [Download — blender.org](https://www.blender.org/download/)

FBX Converter（用于转换FBX模型，可选）

## Shaders

Blender miHoYo Shaders：[github](https://github.com/festivize/Blender-miHoYo-Shaders)

自动化处理插件（适用FBX方案）：[github](https://github.com/michael-gh1/Addons-And-Tools-For-Blender-miHoYo-Shaders)

## 模型

注意：原作者Festivity使用的是fbx模型，这种方法更加快捷，但是不建议使用在动画上，因为需要花时间k帧，不一定能套用现有动作。

### FBX方案

模型fbx文件以及材质，因版权原因请自行寻找（提示：github）

这是正确的FBX模型拥有的文件

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/h4o0zr32h4.png)

| 文件名         | 内容            |
| :------------- | :-------------- |
| \*.fbx         | 基础模型        |
| \*Diffuse      | diffuse贴图通道 |
| \*Lightmap     | 光照贴图        |
| \*Shadow\_Ramp | 阴影贴图        |
| \*Shadow       | 阴影过渡        |

**本文介绍该方案**

## PMX方案（原生mmd）推荐

cats-plugin（用于导入pmx模型，vmd动作）

pmx模型（自行寻找）

贴图（包括光照，阴影等）此处建议沿用FBX方案中的贴图

**下期介绍该方案**

---

# FBX方案

目前经过测试能够一键运行不出错的角色如下：安柏、苏，柯莱、多莉、胡桃，神里绫人、刻晴、荧、纳西妲、妮露、罗莎莉亚、提纳里、夜兰

这里不展示一键运行如何使用，因为如上模型我没一个能一键成功的。

## 1.安装自动化处理插件

[Addons-And-Tools-For-Blender-miHoYo-Shaders/setup\_wizard at main · michael-gh1/Addons-And-Tools-For-Blender-miHoYo-Shaders (github.com)](https://github.com/michael-gh1/Addons-And-Tools-For-Blender-miHoYo-Shaders/tree/main/setup_wizard)

如图所示

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/0b1trdyc9t.png)

启用插件

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/z8tj6umqux.png)

## 2.导入模型

在3d视图按键盘上<**N**>，选中选项卡上的<**Genshin**>

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/wcvapalwrv.png)

单击<**Set Up Character**>

选择FBX及材质所在文件夹，并单击蓝色导入按钮

![](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/9jo0l94l8f.png)

这时候模型已经导入进来了，但是是躺着的，选中模型，在变换选项卡里面将X轴改为90

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/8ffzqithdt.png)

## 3.导入材质

全选模型，单击Genshin选项卡里的Set Up Materials，选择上面下载的 miHoYo - Genshin Impact.blend（不建议使用Goo Engine的那个文件）

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/4eliktrmoi.png)

提示 Imported Shader/Genshin Materials... 则完成

这时候切到视图渲染，效果如图

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/glb4mm8zy0.png)

## 4.设置光照材质

给一个材质节点视图

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/0qha592w0e.png)

检查下对应材质节点有没有出错

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/8x7sfhfaxj.png)

按照提示选择对应的贴图

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/aiy4fedi8k.png)

给 body，hair，face，dress都检查一下，有没有漏选贴图的

来到 Ramp 节点组这里，点这里展开

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/gi5dit2bae.png)

根据提示选上，点击这个面板里右上角箭头返回

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/i4w5f2kg1n.png)

对每一个节点都这么处理

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/plq5e9mb35.png)

改得差不多就行了，不是所有节点都必须有的，lightmap和ramp是必须要改的

## 5.绑定脸部动作

如果直接完成的话，阴影不会跟踪人物，所以必须让 Main Light Direction 绑定骨骼

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/kq7ui45sxl.png)

Bone选择头部

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/j5csxg4ln1.png)

## 6.查看效果

渲染颜色模式改为标准，不然效果不佳

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/3yofujiio8.png)

这时，动一下 Main Light Direction 的Z轴旋转，或者姿态模式让人物动下头，效果就有了

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/tvn0ikhhdb.png)

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/o1hbzm027i.png)

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/5xyvydvd9k.png)

# 总结

本方案需要手动改动的地方较少，设置简单

但由于很多mmd模型都是pmx，pmd，材质光影之类的比较难找到，如果一键不能导入，那就很麻烦了，一个个地修改很费时间

实时处理起来可能很卡，我的CPU都冒烟了，不敢开渲染视图

![image.png](https://arsrnasitehk-1257609559.file.myqcloud.com/blog-images/blender-Festivity-render/15lg8ey7e3.png)

---

Powered by Ar-Sr-Na

允许署名转载
