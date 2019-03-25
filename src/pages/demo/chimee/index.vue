<template>
  <d2-container>
    <template slot="header">ChimeePlayer 播放 HLS 视频流</template>
    <div id="wrapper"></div>
  </d2-container>
</template>

<script>
// import ChimeePlayer from 'chimee-player'
// import "chimee-kernel-hls"
// require('chimee-player/lib/chimee-player.css')
export default {
  // name: 'chimee',
  data () {
    return {
      // filename: __filename
    }
  },
  mounted () {
    // HLS 直播
    // let chimee = new ChimeePlayer({
    //   wrapper: '#wrapper', // video dom容器
    //   src: 'http://cdn.toxicjohann.com/lostStar.mp4',
    //   // src: 'http://192.168.9.12:8080/hls/stream.m3u8',
    //   // box: 'hls',
    //   // isLive: true,
    //   autoplay: true,
    //   controls: true
    // })
    // console.log(chimee)
  }
}
</script>
