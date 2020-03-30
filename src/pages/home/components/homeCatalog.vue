<template>
  <div class="wrapper">
  	<div class="icon" 
  		 v-for="item of iconList"
  		 :key="item.id"
  		 >
  		<div class="icon-img">
  			<img 
  				class="img" 
  				:src="item.imgUrl"
  				:class="[item.color]"
  				>
  		</div>
  		<div class="icon-desc">{{item.desc}}</div>
  	</div>
    <div class="t-bottom"></div>
  </div>
</template>
<!-- :class="[item.color]"：用于元素绑定样式 -->
<script>
export default {
  name: 'homeCatalog',
  props:{
    iconList:Array
  },
  data(){
  	return{
  		red:'red',
  		blue:'blue',
  		orange:'orange',
  		green:'green',
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
	.wrapper
		padding-top:.2rem
		.icon
			width:25%
			float:left
			.img
				display:block
				border-radius:1rem
				margin:0 auto
				width:50%
			.red
				background:#fd6266
			.blue
				background:#0000FF
			.orange
				background:#FFA500
			.green
				background:#008000
			.icon-desc
				text-align:center
				padding:.2rem 0 .5rem 0
</style>











