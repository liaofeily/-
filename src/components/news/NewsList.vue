<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for = "item in newslist" :key = "item.id">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" :src="item.url">
					<div class="mui-media-body">
						<h1>{{ item.title}}</h1>
						<p class='mui-ellipsis'>
							<span>发表时间：{{ item.add_time }}</span>
							<span>点击: {{ item.click }}次</span>
						</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {

  name: 'NewsList',

  data () {
    return {
    	newslist: []
    }
  },
  created () {
  	this.getNewsList()
  },
  methods: {
  	getNewsList () {
  		this.$http.get('static/json/news.json').then(result => {
  			if (result.body.status === 0) {
  				this.newslist = result.body.message
  			} else {
  				Toast('加载新闻列表失败')
  			}
  		})
  	}
  }
}
</script>

<style lang="css" scoped>
.mui-media-body {
	text-align: left;
}
.mui-media-body h1 {
	font-size: 16px;
	font-weight: 900;
	overflow:hidden;
	text-overflow: ellipsis;
}
.mui-ellipsis {
	font-size: 14px;
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
