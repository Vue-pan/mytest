<template>
  <div class="wrapper">
  	<swiper :options="swiperOption">
	    <swiper-slide 
	    	v-for="item of headerImg"
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
  data(){
  	return {
  		headerImg:[
  			{
  				id:'001',
  				imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583836026127&di=78bafdeef1d71700ab7832621aa8145e&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg'
  			},
  			{
  				id:'002',
  				imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583836026128&di=7626998d4f75df57c661545d3f9cb4bf&imgtype=0&src=http%3A%2F%2Fbbs.jooyoo.net%2Fattachment%2FMon_0905%2F24_65548_2835f8eaa933ff6.jpg'
  			}
  		],
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











