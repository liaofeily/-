<template>
  <div id="app">

    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="我的项目首页">
      <div slot="left" v-show = "showf">
        <mt-button icon="back" @click="back">返回</mt-button>
      </div>
      <!-- mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <!-- 中间的路由 router-view 区域 -->
    <transition>
      <router-view/>
    </transition>
    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-itemx" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-itemx" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-itemx" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge" :class="$store.getters.getAllCount ===0 ? 'opacity' : ''">{{ $store.getters.getAllCount }}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-itemx" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      show:null
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  computed: {
    showf: function () {
      if (this.$route.fullPath === "/home") {
        this.show = false
      } else {
        this.show = true
      }
      return this.show
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
a:hover {
  text-decoration: none;
}
.mint-header-button.is-left button:active {
  background-color: #26a2ff;
}
.v-enter {
  opacity: 0;
  -webkit-transform: translateX(100%);
          transform: translateX(100%);   
}
.v-leave-to {
  opacity: 0;
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.mui-bar {
  box-shadow: none;
  border-top: .3px solid rgba(0,0,0,.85)
}
.mint-header {
  line-height: 40px;
}
.mint-header.is-fixed {
  z-index: 99;
}
.mint-header-title {
  font-size: 18px;
  font-weight: bold;
  margin: auto;
}
.mui-bar-tab .mui-tab-itemx.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-itemx {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-itemx .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-itemx .mui-icon~.mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mint-button-icon {
  margin-right: 3px;
}
.opacity {
  opacity: 0
}
</style>
