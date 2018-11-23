// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/mui/css/mui.css'
import { Header, Button } from 'mint-ui'
// import resource from './resource'
// import store from './store'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)

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
