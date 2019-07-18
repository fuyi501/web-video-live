<template>
  <video-player class="vjs-custom-skin"
    ref="videoPlayer"
    :options="playerOptions"
    @ready="playerReadied">
  </video-player>
</template>

<script>
import 'videojs-contrib-hls'

export default {
  name: 'hls-live',
  props: {
    src: {
      type: String,
      default: 'http://gcqq450f71eywn6bv7u.exp.bcevod.com/mda-hiup6h1qdymgf3fe/mda-hiup6h1qdymgf3fe.m3u8'
    }
  },
  data () {
    return {
      playerOptions: {
        // height: '320',
        // width: '100%',
        sources: [{
          withCredentials: false,
          type: "application/x-mpegURL",
          src: this.src
        }],
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        },
        flash: { hls: { withCredentials: false }},
        html5: { hls: { withCredentials: false }},
        autoplay: true, // 自动播放
        // controls: true, // 控制条
        fluid: true, // 按比例缩放适应容器
        // preload: 'auto', // 预加载
        // muted: true, // 消除所有音频
        // loop: false, // 循环播放
        aspectRatio: "16:9",
        // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg' //首屏图片
      }
    }
  },
  methods: {
    playerReadied(player) {
      var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
      player.tech_.hls.xhr.beforeRequest = function(options) {
        // console.log(options)
        return options
      }
    }
  }
}
</script>