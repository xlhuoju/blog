---
title: 关于ARRI的那位美女Isabella
tags:
  - 未分类
id: '359'
date: 2019-05-24 13:09:19
---

原创： RayTao [后期暗房小黄灯](void(0);)_前天_

最近陆续在给公司的DI、VFX、Online不同部门间的协作，做工作流程的优化。恰巧这半年来也有不少朋友，隔三岔五地咨询关于各种摄影机素材的IO，特效工作时的色彩管理等问题。干脆就以ARRI为例，讲一下有个标准的、可参考的图像，是如何有助于一个项目的影像质量管理的。

在过去胶片年代，若要确定胶片处理过程是否规范、精确，Kodak提供了所谓的Laboratory Aim Density（简称LAD）文件，列出数据供校对。到后来数字中间片出现，Cineon Log的发明，自然也有一份Digital LAD的DPX文件用来做这种事了。

https://pan.baidu.com/s/1rEOWoCjoRD0ziWPweWhz6Q

arri和柯达的两套文件以及一份arri的说明pdf，提取码：z21k

最有趣的细节，在PDF的最后一页：右下角注明的Reference（参考来源），提到了Glen Kennel于1994年3月，在SMPTE的文章_Digital Film Scanning and Recording: The Technology and Practice_ 。

若看过Keanu Reeves在2012年那时做的那部，讲述影像技术发展的纪录片《Side by Side》，或许会想起来，Glen Kennel？他不是ARRI的CTO么？？？

![](https://s2.ax1x.com/2019/05/24/ViArzq.jpg)

_嗯，就是这位大叔。现在是ARRI的President了_

其实他去ARRI进行ALEXA数字摄影机的开发前，在Kodak就已是技术大拿。做过胶片扫描技术的研究，开发了Cineon Log规格，甚至在德州仪器研发了现在影院标配的DLP投影。其著作《Color and Mastering for Digital Cinema》基本是论文级别的教科书了。

歪个楼：最近Keanu Reeves主演的新片《John Wick: Chapter 3》，口碑之好真出乎意料。据去完香港观影的朋友说，是如老式港产动作片那样的爽。当然了前两集本来就很爽……

所以由于这样的经历，他去ARRI开发ALEXA的过程中，也做了类似的事情。他们做了一张同样性质的LogC图像，放在配套的软件工具ARRI Color Tool里。用户可通过它作为一个标准影像，来更好地在ARRI Color Tool软件里设计自己想要的自定义影像风格（Looks）。并将这些自定义的Looks生成为aml格式文件在ALEXA摄影机中加载。就像在别的软硬件加载LUT去预览画面一样。

![](https://s2.ax1x.com/2019/05/24/ViVcaF.jpg)

Kodak Digital LAD Test Image

![](https://s2.ax1x.com/2019/05/24/ViV5Kx.jpg)

_ARRI Isabella Image_

_看着拍法就挺类似的对吧~_

随着去年ARRI官网的改版，其Camera Workflow页面被重新整理过。现在它有着非常通俗完整的，从前期到后期的各类说明，犹如百科全书。为更好地帮助用户设计工作流程，新版网站提供了这ARRI Isabella Image的文件下载。

下载地址在上面，压缩包有四个图像文件

1.  Isabella.112782.ari **原始的 ARRIRAW 文件。另外三个文件均由它转换处理得到**
2.  LogC\_ref\_Isabella.0.dpx**基于 ARRI LogC / ARRI WideGamut 的 dpx 文件**
3.  ACES\_ref\_Isabella.0.exr**基于 ACES Linear / AP0 的 EXR 文件**
4.  Rec709\_ref\_Isabella.0.tiff将上述ARRIRAW文件，挂载 **ARRI\_LogC2Video\_Classic709** 的LUT（即旧版官网的 LUT Generator 提供的 **K1S1** LUT)，得到的Rec709监看环境下的参考画面，供用户验证对上述三个格式文件的操作。

![](https://s2.ax1x.com/2019/05/24/ViVKCd.jpg)

_Rec709\_ref\_Isabella.0.tiff_

_或者说挂载ARRI\_LogC2Video\_Classic709 LUT的结果_

上述几个文件经本人在Baselight与DaVinci Resolve操作验证，只要操作方式正确，毫无疑问能得到符合各类参考标准的画面。作为一个标准参考画面，它可以帮助你做什么呢

*   无论使用ACES，或使用技术LUT做色彩管理，或软件自身色彩管理功能，都能作为一个标准图像，去验证整个色彩工作流程的正确性。
*   帮助用户去分析，不同软件的色彩管理功能的机制（比如本人就是通过它，摸清Baselight色彩管理的各选项，与DaVinci Resolve之间的异同点）。
*   作为标准参考图像，帮助用户去设计、分析画面风格，优化自定义LUT的设计。

关于第三点，为何它能起到这种作用呢？其实仔细分析这图像里各种元素就能发现

*   这是一个拍摄的光比较大，高动态的影像。画面中有明确的高光、阴影（特别是人物的额头一侧），以及有纯黑的背景。
*   画面中既有灰卡，也有纯白的卡纸，连带背景的黑布，人物额头的阴影，有明确且充足的黑白灰关系可供分析。
*   画面中有色卡，可以看到具体颜色在不同处理手法（或者使用不同LUT）后的变化规律。
*   比过去Kodak那张Digital LAD更进一步的是，这回他们对画面的“服道化”元素，也做了更有心思的设计。浅蓝色的衣服，人物的肤色（skintone），背后的绿色植物，三者颜色直接涉及到了色轮上的六个方向。即：红（RED）、绿（Green）、蓝（Blue）、青（Cyan）、品红（Magenta）、黄（Yellow）。配合色卡、灰卡，可以非常直观地观察分析做出来的LUT或者调色参数，其对画面反差的改变细节，对常见材质、色彩的染色效果。

理论上来说，这个ARRI Isabella Image文件，由于是个高动态的影像，不仅可用于SDR（Rec709、DCI-P3）监看环境下的工作流程验证与影像风格设计。即便是HDR的监看条件，正确设置监看环境后，这图像依然能发挥上述作用。通过这样方式设计出来的Looks，基本能保证较高的泛用性，起到对拍摄过程中的摄影曝光、灯光、美术等环节的指导性作用。简直是做DIT或调色试片时的必备良药。

总结：

从ARRI提供的这个“工具”，其实我们可以现学现卖地，自行针对其他摄影机，拍摄制作出类似的标准影像参考。得到一个可用于工作流程验证与影像风格设计的工具。当然了，各摄影机厂商们（特别是国产厂商），什么时候都学习模仿一下，官方提供一个这样的标准工具，不用用户盲人摸象，就最好不过啦~~

* * *

最后再吆喝一句：

ARRI官网的Camera Workflow页面，有人举手想翻译嘛？因为内容实在太多太通俗科普了。翻译完后保证你能扔掉大部分入门技术书刊了。

* * *

长按二维码关注公众号

查看更多干货

![](https://s2.ax1x.com/2019/05/24/ViVSN4.jpg)

如果觉得有用

欢迎分享到你的朋友圈

或者

**喜欢一下作者**:张来吃