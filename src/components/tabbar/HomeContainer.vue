<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for = 'item in lunbotu' :key = "item.id">
        <img :src="item.url" />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4" v-for = "title in middlecontent" :key = "title.id"><a href="#">
        <span :class="title.class"></span>
        <div class="mui-media-body">{{ title.title1 }}</div></a></li>
    </ul>
  </div>
</template>

<script>
// import { Toast } from 'mint-ui'

export default {

  name: 'HomeContainer',

  data () {
    return {
      lunbotu: [
        {url: 'http://tp.yiaedu.com/showimg.php?url=http://uploads.xuexila.com/allimg/1703/867-1F330164643.jpg'},
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543050430033&di=225423344c686f8e5d44e9b71ad90929&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F03%2F02%2F58V58PICTFk_1024.jpg'},
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543050430030&di=57e53743f573d99e99643be4ebe26133&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F11%2F68%2F32%2F08658PICred.jpg'}
      ],
      middlecontent: [
        {
          title1: '新闻资讯',
          class: 'mui-icon mui-icon-extra mui-icon-extra-new'
        },
        {
          title1: '图片分享',
          class: 'mui-icon mui-icon-image'
        },
        {
          title1: '商品购买',
          class: 'mui-icon mui-icon-extra mui-icon-extra-cart'
        },
        {
          title1: '留言反馈',
          class: 'mui-icon mui-icon-email-filled'
        },
        {
          title1: '视频专区',
          class: 'mui-icon mui-icon-extra mui-icon-extra-computer'
        },
        {
          title1: '联系我们',
          class: 'mui-icon mui-icon-extra mui-icon-extra-custom'
        }
      ]
    }
  },
  created () {
    // this.getLunbotu()
  },
  methods: {
    // getLunbotu () {
    //   this.$http.get('../../../lunbotu.json', {emulateJSON: true}).then(result => {
    //     if (result.body.status === 0) {
    //       this.lunbotuList = result.body.message
    //     } else {
    //       Toast('加载轮播图失败')
    //     }
    //   }).catch(function (error) {
    //     console.log(error)
    //     this.errorMsg = error
    //   })
    // }
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
