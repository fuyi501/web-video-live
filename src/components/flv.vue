<template>
  <video id="videoElement" style="background-color:#fff;height:600px;width:100%;"></video>
</template>

<script>
import flvjs from 'flv.js'

export default {
  name: 'flvjs',
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
    let flvSrc = this.src
    console.log('flvSrc:', flvSrc)
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement')
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        // url: 'http://yunxianchang.live.ujne7.com/vod-system-bj/TLaf2cc9d469939803949187b46da16c45.flv'
        url: flvSrc
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
