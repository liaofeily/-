import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem("car") || '[]')

export default new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
  	addToCar (state, goodsinfo) {
      var Flag = false

  		state.car.some(item => {
  			if (item.id == goodsinfo.id) {
  				item.count += parseInt(goodsinfo.count)
          Flag = true
  				return true  			
        } 
  		})

      if (!Flag) {
        state.car.push(goodsinfo)
      }

      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo (state, goodinfo) {
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodinfo.count)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFormCar (state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i ,1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected (state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount (state) {
      var o = {
        count: 0,
        amount: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price *item.count
        }
      })
      return o
    }
  }
})