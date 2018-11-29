<template>
	<div class="mui-numbox" data-numbox-min='1'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" @change = "countChanged" ref = "numbox" />
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
import mui from '@/assets/mui/js/mui.min.js'

export default {

  name: 'goodsinfo_numbox',

  data() {
    return {
    }
  },

  mounted () {
  	mui(".mui-numbox").numbox()
  },
  methods: {
    countChanged () {
      this.$emit('getcount', parseInt(this.$refs.numbox.value))
    }
  },
  props: ["max"],
  watch: {
    "max" :function(newval, oldval) {
      mui(".mui-numbox").numbox().setOption('max', parseInt(newval))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
