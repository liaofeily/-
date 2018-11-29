// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'
// import axios from 'axios'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// import { Header, Button, Swipe, SwipeItem, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.use(Lazyload)

Vue.use(VueResource)
Vue.use(VuePreview)

Vue.filter('dataFormat', function (dataStr, patten = 'YYYY-MM-DD HH:mm:ss') {
	return moment(dataStr).format(patten)
})

// Vue.prototype.$http = axios
Vue.http.options.emulateJSON = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
