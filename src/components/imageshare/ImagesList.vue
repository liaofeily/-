<template>
	<div>
		<div id="slider" class="">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for = "item in imgcatelist" :key = "item.id" @tap = "getPhotoListByCateId(item.id)">
						{{ item.title }}
					</a>
				</div>
			</div>
		</div>
		<ul class="photolist">
		  <router-link v-for="item in list" :key = "item.id" :to = "'/home/imageinfo/' + item.id" tag = "li">
		    <img v-lazy="item.img_url">
		    <div class="info">
		    	<h4 class="info-title">{{ item.title }}</h4>
		    	<div class="info-body">{{ item.zhaiyao }}</div>
		    </div>
		  </router-link>
		</ul>
	</div>
</template>

<script>

import mui from "../../assets/mui/js/mui.min.js"

export default {

  name: 'ImagesList',

  data () {
    return {
    	imgcatelist: [],
    	list: []
    }
  },
  created () {
  	this.getAllCategory()
  	this.getPhotoListByCateId(0)
  },
  mounted () {
  	mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		})
  },
  methods: {
  	getAllCategory () {
  		this.$http.get('static/json/imgcategory.json').then(result => {
  			if (result.body.status === 0) {
  				result.body.message.unshift({id: 0,title: '全部'})
  				this.imgcatelist = result.body.message
  			}
  		})
  	},
  	getPhotoListByCateId (id) {
  		var addr = 'static/json/images/image'+ id + '.json'
  		this.$http.get(addr).then(result => {
  			if (result.body.status === 0) {
  				this.list = result.body.message
  			}
  		})
  	}
  }
}
</script>

<style lang="css" scoped>
* {
	touch-action: pan-y;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
	border: none;
}
.photolist {
	list-style: none;
	margin: 0;
	padding:0 10px;
}
.photolist li{
	position: relative;
	background-color: #FFF;
	text-align: center;
	margin: 10px 0;
	box-shadow: 0 0 9px #999;
}
.photolist li img {
	width: 100%;
	border-radius: 5px;
	vertical-align: middle;
}
.photolist li img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
div.info {
	width: 100%;
	text-align: left;
	position: absolute;
	height: 84px;
	bottom: 0px;
	background-color: rgba(0,0,0,.4);
	color: white;
	padding: 5px;
	overflow:hidden;
	text-overflow:ellipsis;
}
div.info h4.info-title {
	font-size: 16px;
}
div.info div.info-body {
	font-size: 14px;
}
</style>
