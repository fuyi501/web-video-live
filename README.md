# web 播放视频流/直播

在 H5 上播放视频流，有很多开源的播放器可以使用，比如：

1. [flv.js](https://github.com/bilibili/flv.js)（B站开源）使用纯JavaScript而不使用Flash编写的HTML5 Flash视频（FLV）播放器。
2. [vue-video-player](https://github.com/surmon-china/vue-video-player) 适用于 Vue 的 video.js 播放器组件。
3. [chimee.js](https://github.com/Chimeejs/chimee) 组件化H5播放器框架，支持 mp4、m3u8、flv 等多种格式，由奇舞团视频云前端组研发。
4. [cyberplayer](http://cyberplayer.bcelive.com/demo/new/index.html) 百度官方推出的用于开发网页播放器的软件开发工具包。
5. [ksplayer](https://github.com/ksvc/ksplayer-web) KSPlayer是金山云的Web端视频播放器。

以上播放器我都使用过，他们支持不同的协议，可以根据自己的需要进行选择。

本系统中集成了 flv.js 和 vue-video-player 播放器，其他的没有集成进去。

我使用 vue 开发前端页面并需要进行网页截图，要求延时低，所以我选择了低延时的 HTTP-FLV 协议，支持这个协议的上面的只有 flv.js 了，所以最终选择了它。

## 展示效果

在一个做视频监控的项目中使用了 flv.js ，效果如下：

![](http://img.fuwenwei.com/blog/20190718221626.jpg)

![](http://img.fuwenwei.com/blog/20190718221620.jpg)

## 可用的视频流

视频流名称 | 地址
------- | -------
香港卫视 | rtmp://live.hkstv.hk.lxdns.com/live/hks1
香港财经 | rtmp://202.69.69.180:443/webcast/bshdlive-pc
美国中文电视 | rtmp://media3.sinovision.net:1935/live/livestream
湖南卫视 | rtmp://58.200.131.2:1935/livetv/hunantv
大熊兔(点播) | rtsp://184.72.239.149/vod/mp4://BigBuckBunny_175k.mov
CCTV1 高清 | http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8 (速度比较慢，但是可以用)
CCTV3 高清 | http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8 (速度比较慢，但是可以用)
CCTV5+ 高清 | http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8 (速度比较慢，但是可以用)
CCTV6 高清 | http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8 (速度比较慢，但是可以用)
