<template>
  <div class="wrapper">
  	<swiper :options="swiperOption">
	    <swiper-slide 
	    	v-for="item of swiperList"
	    	:key="item.id"
	    	>
	    	<img class="swiper-img" :src="item.imgUrl">
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
  </div>
</template>

<script>
//指令缩写 (用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:)
export default {
  name: 'homeSwiper',
  props:{
    swiperList:Array
  },
  data(){
  	return {
  		swiperOption:{
  			pagination:'.swiper-pagination',
  			loop:true //是否循环
  		}
  	}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<!-- scoped:当前的样式只能作用当前的组件 -->
<!-- 要作用于外来的组件，需使用穿透(即越过当前组件去给其他组件添加样式)：如下-->
<!-- ".wrapper >>> .swiper-pagination-bullet" -->
<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet
		background:#fff
	.swiper-img
		width:100%

</style>











