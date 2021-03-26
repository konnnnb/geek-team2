import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as GoogleMaps from "vue2-google-maps";
import { googleMapKey } from "./apikey";
import "./firebase.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from "./store"
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
  store,
  render: h => h(App)
}).$mount('#app')
