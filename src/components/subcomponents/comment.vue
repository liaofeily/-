<template>
	<div class="clearfix">
		<h3>发表评论</h3>
		<hr/>
		<div class="form-group">
			<label>评论内容：</label>
			<textarea class="form-control" rows="5" v-model = "content" placeholder="请输入需要评论的内容..."></textarea>
		</div>
		<mt-button type="primary" size="large">发表评论</mt-button>
		<ul class="list-group">
			<li class="cmt" v-for = "(item, i) in comments" :key = "item.add_time">
				<div>
					第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.username }}&nbsp;&nbsp;发表时间：{{ item.add_time | dataFormat }}
				</div>
				<div>{{ item.content === 'undefined' ? '此用户很懒，什么都没有留下' : item.content }}</div>
			</li>
		</ul>
		<mt-button type="danger" size="large" plain @click = "getMore">加载更多</mt-button>
	</div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {

  name: 'comment',

  data () {
    return {
    	pageIndex: 1,
    	content: '',
			comments: []
    }
  },
  created () {
  	this.getContainer()
  },
  props: ['id'],
  methods: {
  	getContainer () {
  		this.$http.get('static/json/pinluncontainer' + this.pageIndex + '.json').then(result => {
  			if (result.body.status === 0) {
  				this.comments = this.comments.concat(result.body.message)
  			} else {
  				Toast('加载评论列表失败')
  			}
  		})
  	},
  	getMore () {
  		this.pageIndex++
			this.getContainer()
  	}
  }
}
</script>

<style lang="css" scoped>
.clearfix {
	text-align:left;
}
h3 {
	font-weight: bold;
}
hr {
	background-color: grey;
}
.form-group {
	margin: 0;
}
textarea {
	font-size: 14px;
	border: none;
	/*height: 85px;*/
}
label{
	font-size: 18px;
}
.list-group {
	font-size: 14px;
	font-weight: bold;
}
.list-group .cmt {
	margin: 5px 0;
}
.list-group .cmt div:first-child {
	line-height: 30px;
	background-color: #ccc;
}
.list-group .cmt div:last-child {
	line-height: 35px;
	text-indent: 2em;
}
</style>
