---
title: Ar-Sr-Na 直播
id: '594'
tags: []
comments: false
date: 2020-04-22 13:30:45
---

  .mainContainer { display: block; width: 1024px; margin-left: auto; margin-right: auto; } .centeredVideo { display: block; width: 100%; height: 576px; margin-left: auto; margin-right: auto; margin-bottom: auto; } .controls { display: block; width: 100%; text-align: left; margin-left: auto; margin-right: auto; } 

老铁，换个浏览器吧，连html5视频都不支持，这不彳亍啊

  

播放 暂停 停止

var player = document.getElementById('videoElement'); if (flvjs.isSupported()) { var flvPlayer = flvjs.createPlayer({ type: 'flv', url: 'https://l.arsrna.cn/live/a.flv' }); flvPlayer.attachMediaElement(videoElement); flvPlayer.load(); //加载 } function flv\_start() { player.play(); } function flv\_pause() { player.pause(); } function flv\_destroy() { player.pause(); player.unload(); player.detachMediaElement(); player.destroy(); player = null; } function flv\_seekto() { player.currentTime = parseFloat(document.getElementsByName('seekpoint')\[0\].value); }