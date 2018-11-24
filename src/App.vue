<template>
  <div id="app">

    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="我爱我的宝宝">
      <!-- <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link> -->
      <!-- mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <!-- 中间的路由 router-view 区域 -->
    <transition>
      <router-view/>
    </transition>
    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  overflow-x: hidden;
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
</style>
