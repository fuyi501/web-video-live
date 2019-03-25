<template>
  <d2-container>
    <template slot="header">使用 Vue-Video-Player 播放 RTMP和HLS 协议的视频流</template>
    <el-row :gutter="40">
      <el-col :span="12">
        <video-player class="vjs-custom-skin"
          ref="videoPlayer"
          :options="playerOptions"
          :playsinline="true"
          customEventName="customstatechangedeventname">
        </video-player>
      </el-col>
      <el-col :span="12">
        <video-player class="vjs-custom-skin"
          :options="playerOptions2"
          @ready="playerReadied">
        </video-player>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import 'videojs-flash'
import 'videojs-contrib-hls'
export default {
  data () {
    return {
      playerOptions: {
        height: '320',
        sources: [ {
          type: 'rtmp/mp4',
          src: 'rtmp://192.168.9.12:1935/live/stream'
        } ],
        techOrder: ['flash'],
        autoplay: true,
        controls: true,
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg'
      },
      playerOptions2: {
        // videojs and plugin options
        height: '320',
        sources: [ {
          withCredentials: false,
          type: 'application/x-mpegURL',
          src: 'http://192.168.9.12:8080/hls/stream.m3u8'
        } ],
        autoplay: true,
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        },
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg'
      }
    }
  },
  methods: {
    playerReadied (player) {
      var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
      console.log(hls)
      player.tech_.hls.xhr.beforeRequest = function (options) {
        // console.log(options)
        return options
      }
    }
  }
}
</script>
