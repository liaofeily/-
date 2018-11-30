// import Vue from 'vue'
// import VueResource from 'vue-resource'

// Vue.use(VueResource)

// export default({
// 	name: 'app',
//   data () {
//     return {
//       addr: '/data.json'
//     }
//   },
//   methods: {
//     dataGet (addr) {
//       this.$http.get(addr, ).then(res => {
//         console.info(res.data)
//       }, error => {
//         console.info(error)
//       })
//     },
//     dataPost () {
//       this.$http.post(this.addr, {
//         name: '1'
//       }, {
//         headers: {
//           token: 'a'
//         }
//       }).then(res => {
//         console.info(res.data)
//       }, error => {
//         console.info(error)
//       })
//     },
//     dataJsonP () {
//       console.info('jsonp')
//       this.$http.jsonp(this.addr, {
//         params: {
//           name: '1'
//         }
//       }).then(res => {
//         console.info(res.data)
//       }, error => {
//         console.info(error)
//       })
//     }
//   }
// })