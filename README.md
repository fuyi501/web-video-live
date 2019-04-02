# 网页直播系统

系统使用 [D2Admin](https://github.com/d2-projects/d2-admin) 简化版开发

在 H5 上播放视频流，有很多开源的播放器可以使用，比如

1. flv.js（B站开源）
2. ksplayer.js（金山云开源）
3. vue-video-player（基于vue的）
4. chimee.js（奇舞团开源）
5. cyberplayer（百度开源）

以上播放器我都使用过，他们支持不同的协议，可以根据自己的需要进行选择。

本系统中集成了 flv.js 和 vue-video-player 播放器，其他的没有集成进去。

我使用 vue 开发前端页面并需要进行网页截图，要求延时低，所以我选择了低延时的HTTP-FLV协议，支持这个协议的上面的只有 flv.js 了，所以最终选择了它。

## 展示效果

![](http://img.fuwenwei.com/blog/vue.png)

![](http://img.fuwenwei.com/blog/flvweb播放.png)
