<template>
  <div class="goods_list">
    <!-- <router-link class="goods_item" v-for= "item in goodslist" tag="div" :to="'/home/goodsinfo/' + item.id" :key="item.id">
			<img :src="item.img_url" alt="">
			<h2 class="title">{{ item.title }}</h2>
			<div class="info">
				<p class="price">
					<span class="newprice">￥{{ item.sell_price }}</span>
					<span class="oldprice">￥{{ item.market_price }}</span>
				</p>
				<p class="sellmsg">
					<span>热卖中</span>
					<span>剩余{{ item.stock_quantity }}件</span>
				</p>
			</div>
		</router-link> -->
    <div class="goods_item" v-for="item in goodslist" :key="item.id" @click="getDetail(item.id)">
      <img :src="item.img_url" alt="">
      <h2 class="title">{{ item.title }}</h2>
      <div class="info">
        <p class="price">
          <span class="newprice">￥{{ item.sell_price }}</span>
          <span class="oldprice">￥{{ item.market_price }}</span>
        </p>
        <p class="sellmsg">
          <span>热卖中</span>
          <span>剩余{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore" plain>加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'

export default {

  name: 'GoodsList',

  data() {
    return {
      pageindex: 1,
      goodslist: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      this.$http.get('static/json/goods/getgoods' + this.pageindex + '.json')
        .then(result => {
          if (result.body.status === 0) {
            console.log(this.goodslist);
            this.goodslist = this.goodslist.concat(result.body.message)
            console.log(this.goodslist);
          } else {
            Toast('商品列表加载失败')
          }
        })
        .catch(function(error) {
          if (error.status === 404 && error.statusText === "Not Found") {
            Toast('没有更多了')
          }
        })
    },
    getMore() {
      this.pageindex++
      this.getGoodsList()
    },
    getDetail(id) {
      this.$router.push("/home/goodsinfo/" + id)
    }
  }
}

</script>
<style lang="css" scoped>
div.goods_list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 6px;
}

div.goods_list .goods_item {
  width: 49%;
  text-align: left;
  border: 1px solid #ccc;
  -webkit-box-shadow: 0 0 8px #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  padding: 2px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  min-height: 293px;
}

div.goods_list .goods_item img {
  width: 100%;
}

div.goods_list .goods_item h2 {
  font-size: 20px;
  font-weight: bolder;
}

div.goods_list .goods_item .info {
  background-color: rgba(0, 0, 0, 0.1);
}

div.goods_list .goods_item p {
  padding: 0 5px;
}

div.goods_list .goods_item .newprice {
  font-size: 16px;
  color: red;
  font-weight: bold;
}

div.goods_list .goods_item .oldprice {
  text-decoration: line-through;
  font-size: 13px;
  margin-left: 10px;
}

div.goods_list .goods_item .sellmsg {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

</style>
