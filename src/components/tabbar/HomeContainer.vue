<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for = 'item in lunbotu' :key = "item.id">
        <img :src="item.url" />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4" v-for = "title in middlecontent" :key = "title.id">
        <router-link :to="title.router">
          <span :class="title.class"></span>
          <div class="mui-media-body">{{ title.title1 }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {

  name: 'HomeContainer',

  data () {
    return {
      lunbotu: [],
      middlecontent: [
        {
          title1: '新闻资讯',
          class: 'mui-icon mui-icon-extra mui-icon-extra-new',
          router: '/home/newslist'
        },
        {
          title1: '图片分享',
          class: 'mui-icon mui-icon-image',
          router: '/home/imagelist'
        },
        {
          title1: '商品购买',
          class: 'mui-icon mui-icon-extra mui-icon-extra-cart',
          router: '/home/goodslist'
        },
        {
          title1: '留言反馈',
          class: 'mui-icon mui-icon-email-filled',
          router: '/home/message'
        },
        {
          title1: '视频专区',
          class: 'mui-icon mui-icon-extra mui-icon-extra-computer',
          router: '/home/radio'
        },
        {
          title1: '联系我们',
          class: 'mui-icon mui-icon-extra mui-icon-extra-custom',
          router: '/home/contact'
        }
      ]
    }
  },
  created () {
    this.getLunbotu()
  },
  methods: {
    getLunbotu () {
      this.$http.get('static/json/lunbotu.json', {emulateJSON: true}).then(result => {
        if (result.body.status === 0) {
          this.lunbotu = result.body.message
        } else {
          Toast('加载轮播图失败')
        }
      }).catch(function (error) {
        console.log(error)
        this.errorMsg = error
      })
    }
  }
}
</script>

<style lang="css" scoped>
.mint-swipe {
    height: 200px;
}
.mint-swipe-item:first-child {
    background-color: lightblue;
}
.mint-swipe-item:nth-child(2) {
    background-color: cyan;
}
.mint-swipe-item:nth-child(3) {
    background-color: yellow;
}
.mui-grid-view.mui-grid-9 {
  border: none;
  background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.mui-media-body{
  font-size: 14px;
}
</style>
