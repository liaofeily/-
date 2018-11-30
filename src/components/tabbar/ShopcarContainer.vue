<template>
	<div class="shopcar-container">
		<!-- 商品列表区域 -->
		<div class="goods-list">
			<div class="mui-card">
			<!-- <div class="mui-card" v-for = "(item, i) in goodlist" :key= "item.id"> -->
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						
						<!-- <mt-switch v-model = "$store.getters.getGoodsSelected[item.id]" @change= "selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
 -->
 						<mt-switch v-model="value"></mt-switch>
						<img src="static/images/cbd.jpg">
						<div class="info">
							<h2>小米小米</h2>
							<p>
								 <span class="price">￥2199</span>
								 <!-- <numbox :initcount = "$store.getters.getGoodsCount[item.id] :goodsid = "item.id"></numbox> -->
								 <numbox></numbox>
								 <a href="#" @click.prevent = "remove(item.id, i)">删除</a>
							</p>
						</div>

					</div>
				</div>
			</div>
		</div>
		<!-- 结算区域 -->
		<div class="mui-card jisuan_box">
			<div class="mui-card-content">
				<div class="mui-card-content-inner jisuan">
					<div class="left">
						<p>总计(不含运费)</p>
						<p>已勾选商品 <span>0</span> 件，总价 <span>￥0</span></p>
						<!-- <p>已勾选商品 <span>{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件，总价 <span>￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p> -->
					</div>
					<mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox.vue'

export default {

  name: 'ShopcarContainer',

  data () {
    return {
    	goodslist: []
    }
  },
  created (){
  	// this.getGoodsList()
  },
  methods: {
  	// getGoodsList () {
  	// 	var idArr = []
  	// 	this.$store.state.car.forEach(item => idArr.push(item.id))
  	// 	// 如果购物车中没有商品则直接返回
  	// 	if (idArr.length <= 0) {
  	// 		return
  	// 	}

  	// 	this.$http.get("url" + idArr.join(',')).then(result => {
  	// 		if (result.body.status === 0) {
  	// 			this.goodslist = result.body.message
  	// 		}
  	// 	})
  	// }
  	remove (id, index) {
  		this.goodslist.splice(index, 1)
  		this.$store.commit('removeFormCar', id)
  	},
  	selectedChanged (id, value) {
  		this.$store.commit('updateGoodsSelected', { id, selected: value })
  	}
  },
  components: {
  	numbox
  }
}
</script>

<style lang="css" scoped>
.shopcar-container {
	background-color: #fff;
	overflow:hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	height: 100%;
}
.goods-list .mui-card-content-inner {
	display: flex;
	justify-content: space-between;
	align-items: center;
	vertical-align: center;
}
.goods-list img {
	width: 60px;
	height: 60px;
}
.goods-list h2 {
	font-size: 13px;
	font-weight: bold;
}
.goods-list .info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.goods-list .info .price {
	color: red;
	font-weight: bold;
}
.jisuan_box {
}
.jisuan_box .jisuan {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.jisuan_box .jisuan .left {
	text-align: left;
}
.jisuan_box .jisuan .left span {
	color: red;
	font-weight: bold;
	font-size: 18px;
}
</style>
