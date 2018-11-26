<template>
	<div class="newsinfo-container">
		<h3 class="title">{{ newsinfo.title }}</h3>
		<p class="subtitle">
			<span>发表时间：{{ newsinfo.add_time }}</span>
			<span>点击: {{ newsinfo.click }}次</span>
		</p>
		<hr/>
		<div class="content"></div>
		<comment :id="this.id"></comment>
	</div>
</template>

<script>
import { Toast } from 'mint-ui'
import comment from '../subcomponents/comment.vue'

export default {

  name: 'Newsinfo',

  data () {
    return {
    	id: this.$route.params.id,
    	newsinfo: {}
    }
  },
  created () {
  	this.getNewsInfo()
  },
  methods: {
  	getNewsInfo () {
  		this.$http.get('static/json/news.json').then(result => {
  			if (result.body.status === 0) {
  				this.newsinfo = result.body.message[0]
  			} else {
  				Toast('加载新闻列表失败')
  			}
  		})
  	}
  },
  components: {
  	'comment': comment
  }
}
</script>

<style lang="css" scoped>
.newsinfo-container {
	padding: 0 4px;
}
.title {
	color: red;
	margin: 15px 0;
	font-size: 16px;
}
.subtitle {
	font-size: 16px;
	color: #226aff;
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
