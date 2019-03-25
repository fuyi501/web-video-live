<template>
  <d2-container :filename="filename" class="page">
    <template slot="header">使用 flv.js 播放 http-flv 协议的视频流</template>
    <video id="videoElement" style="background-color:#fff;height:371px;width:660px;"></video>
  </d2-container>
</template>

<script>
import flvjs from 'flv.js'

export default {
  data () {
    return {
      filename: __filename
    }
  },
  mounted () {
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement')
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://192.168.9.12:8080/live?app=live&stream=stream'
      })
      flvPlayer.attachMediaElement(videoElement)
      flvPlayer.load()
      flvPlayer.play()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
