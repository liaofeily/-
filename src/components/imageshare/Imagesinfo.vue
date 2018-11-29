<template>
  <div class="photoinfo_container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dataFormat }}</span>
      <span>点击次数：{{ photoinfo.click }}</span>
    </p>
    <hr />
    <!-- 缩略图区域 -->
    <div class="slt">
      <vue-preview :slides="photoinfo.slide1" @close="handleClose"></vue-preview>
    </div>
    <!-- 图片详细内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 评论区域 -->
    <comment :id="this.id"></comment>
  </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'

export default {

  name: 'Imagesinfo',

  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {}
    }
  },
  created() {
    this.getPhotoInfo()
  },
  methods: {
    getPhotoInfo() {
      this.$http.get('static/json/images/photoinfo/photoinfo.json').then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0]
        }
      })
    },
    handleClose() {
      console.log('close event')
    }
  },
  components: {
    'comment': comment
  }
}

</script>
<style lang="css" scoped>
.photoinfo_container {
  padding: 0 3px;
}

.photoinfo_container h3 {
  color: #26a2ff;
  font-size: 18px;
  font-weight: bold;
}

.subtitle {
  display: flex;
  justify-content: space-between;
}

</style>
