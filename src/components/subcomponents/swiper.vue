<template>
	<div>
		<mt-swipe :auto="4000">
      <mt-swipe-item v-for = 'item in lunbotu' :key = "item.id">
        <img :src="item.url" :class="{'full': isfull }" />
      </mt-swipe-item>
    </mt-swipe>
	</div>
</template>

<script>
export default {

  name: 'swiper',

  data() {
    return {
    }
  },
  props: ["lunbotu","isfull"]
}
</script>

<style lang="css" scoped>
.mint-swipe {
    height: 200px;
    text-align: center; 
}
img {
  height: 100%
}
.full {
  width: 100%
}
</style>
