import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import iView from 'iview';
import 'iview/dist/styles/iview.css';

// 视频播放 vue-video-player
import VueVideoPlayer from 'vue-video-player'
// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer /* {
  options: global default options,
  events: global videojs events
} */)
Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
