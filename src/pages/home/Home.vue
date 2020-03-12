<template>
	<div class="home">
		<home-head class="home-head"></home-head>
		<home-swiper></home-swiper>
		<home-catalog></home-catalog>
		<home-hot></home-hot>
		<home-weekend></home-weekend>
	</div>
</template>

<script>

import homeHead from './components/homeHead'
import homeSwiper from './components/homeSwiper'
import homeCatalog from './components/homeCatalog'
import homeHot from './components/homeHot'
import homeWeekend from './components/homeWeekend'

export default {
  name: 'Home',
  components:{
  	homeHead,
  	homeSwiper,
  	homeCatalog,
  	homeHot,
  	homeWeekend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- z-index:设置层级 -->
<!-- scoped:当前的样式只能作用当前的组件 -->
<style lang="stylus" scoped>
	.home
		position:relative
		.home-head
			position:absolute
			top:0
			left:0
			z-index:100
			width:100%
</style>
