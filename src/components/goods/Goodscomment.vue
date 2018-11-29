<template>
	<div class="container_box">
		<comment_box :id = "this.$route.params.id"></comment_box>
	</div>
</template>

<script>
import comment_box from '../subcomponents/comment.vue'

export default {

  name: 'Goodscomment',

  data() {
    return {

    }
  },

  components: {
  	comment_box
  }
}
</script>

<style lang="css" scoped>
.container_box {
	padding: 0 4px;
}
</style>
