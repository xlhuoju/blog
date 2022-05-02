---
title: 业余无线电“五五节”全天直播
tags:
  - 未分类
id: '630'
date: 2020-05-05 09:22:52
---

> 1937年日寇挑起芦沟桥事变，全国人民奋起抗日，当时抗日前线急需无线电通信技术人员，一些业余无线电爱好者直接奔赴抗日前线。另外，以CRC为基础，组成了“业余无线电人员战时服务团”，积极投身于抗日通信服务工作。各地的业余无线电爱好者在1940年5月5日通过自己的业余电台召开了“空中”大会，以显示民族团结和坚持抗日的决心，并商定5月5日为“中国业余无线电节”。
> 
> ——百度百科·五五节

五五节是中国业余无线电爱好者一年一度的盛会

Ar-Sr-Na博客站将iframe直播站的播放器，转播中继台信号直播

Ar-Sr-Na 直播

  .mainContainer { display: block; width: 1024px; margin-left: auto; margin-right: auto; } .urlInput { display: block; width: 100%; margin-left: auto; margin-right: auto; margin-top: 8px; margin-bottom: 8px; } .centeredVideo { display: block; width: 100%; height: 576px; margin-left: auto; margin-right: auto; margin-bottom: auto; } .controls { display: block; width: 100%; text-align: left; margin-left: auto; margin-right: auto; } 

老铁，换个浏览器吧，连html5视频都不支持，这不彳亍啊

  

播放 暂停 停止

var player = document.getElementById('videoElement'); if (flvjs.isSupported()) { var flvPlayer = flvjs.createPlayer({ type: 'flv', url: 'https://3891.liveplay.myqcloud.com/live/3891\_user\_db8edd56\_94e0.flv' }); flvPlayer.attachMediaElement(videoElement); flvPlayer.load(); //加载 } function flv\_start() { player.play(); } function flv\_pause() { player.pause(); } function flv\_destroy() { player.pause(); player.unload(); player.detachMediaElement(); player.destroy(); player = null; } function flv\_seekto() { player.currentTime = parseFloat(document.getElementsByName('seekpoint')\[0\].value); }