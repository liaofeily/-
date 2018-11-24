// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueResource from 'vue-resource'
import moment from 'moment'
// import axios from 'axios'

import { Header, Button, Swipe, SwipeItem } from 'mint-ui'
// import resource from './resource'
// import store from './store'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(VueResource)



Vue.filter('dataFormat', function (dataStr, patten = 'YYYY-MM-DD HH:mm:ss') {
	return moment(dataStr).format(patten)
})

// Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  // resource,
  components: { App },
  template: '<App/>'
})
