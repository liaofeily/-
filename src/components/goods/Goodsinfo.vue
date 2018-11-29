<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="Enter" @after-enter="afterEnter"> 
	 		<div class="ball" v-show="ballflag" ref="ball"></div>
	 	</transition>
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotu="goodsinfolist" :isfull=true></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥2699</del>
            销售价：<span class="sellprice">￥2199</span>
          </p>
          <p class="buynum">
            购买数量：<numbox @getcount = "getSelectedCount"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品详情区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:</p>
          <p>库存情况:</p>
          <p>上架时间:</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goodsDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goodsComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'

export default {

  name: 'Goodsinfo',

  data() {
    return {
      goodsinfolist: [],
      id: this.$route.params.id,
      ballflag: false,
      selectedCount: 1
    }
  },
  created() {
    this.getGoodsinfo()
  },
  methods: {
    getGoodsinfo() {
      this.$http.get('static/json/images/photoinfo/photoinfo.json').then(result => {
        if (result.body.status === 0) {
          result.body.message[0].slide1.forEach(item => {
            item.url = item.src
          })
          this.goodsinfolist = result.body.message[0].slide1
        }
      })
    },
    goodsDesc(id) {
      this.$router.push({ name: "Goodsdesc", params: { id } })
    },
    goodsComment(id) {
      this.$router.push({ name: "Goodscomment", params: { id } })
    },
    addToShopCar() {
      this.ballflag = !this.ballflag
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)"
      el.style.opacity = "1"
    },
    Enter(el, done) {
      el.offsetWidth

      const ballposition = this.$refs.ball.getBoundingClientRect()
      const badgeposition = document.getElementById("badge").getBoundingClientRect()

      const Xdist = badgeposition.left - ballposition.left
      const Ydist = badgeposition.top - ballposition.top

      el.style.transform = `translate(${Xdist}px,${Ydist}px)`
      el.style.transition = 'all 1s cubic-bezier(.4,-.3,1,.68)'
      done()
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag
    },
    getSelectedCount(count) {
    	this.selectedCount = count
    }
  },
  components: {
    swiper,
    numbox
  }
}

</script>
<style lang="css" scoped>
.goodsinfo-container {
  background-color: #eee;
}

.mui-card {
  margin: 0;
}

.mint-swipe {
  height: 200px;
}

.mui-card-content-inner p {
  text-align: left;
}

.price .sellprice {
  color: red;
  font-size: 18px;
  font-weight: bold;
}

.mui-card-footer:before,
.mui-card-header:after {
  height: 0px;
}

.mui-card-footer {
  display: block;
}

.mui-card-footer button {
  margin: 15px 0;
}

.ball {
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 374px;
  left: 137px;
  z-index: 9999;
}

</style>
