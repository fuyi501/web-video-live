<template>
  <video id="videoElement" style="background-color:#fff;height:600px;width:100%;"></video>
</template>

<script>
import flvjs from 'flv.js'

export default {
  name: 'flvjs', // 不能使用 video 命名
  props: {
    src: {
      type: String,
      default: 'http://cyberplayerplay.kaywang.cn/cyberplayer/demo201711-L1.flv'
      // default: 'http://192.168.9.12:8080/live?app=live&stream=stream'
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    let that = this
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement')
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://cyberplayerplay.kaywang.cn/cyberplayer/demo201711-L1.flv'
        // url: that.src
      })
      flvPlayer.attachMediaElement(videoElement)
      flvPlayer.load()
      flvPlayer.play()
    }
  }
}
</script>

<style lang="less" scoped>

</style>
