import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as GoogleMaps from "vue2-google-maps";
import { googleMapKey } from "./apikey";
import "./firebase.js"



Vue.config.productionTip = false

Vue.use(GoogleMaps, {
  load: {
    key: googleMapKey,
    libraries: "places",
    region: "JP",
    language: "ja",
  },
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
