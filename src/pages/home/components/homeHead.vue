<template>
  <div class="header" :class="[showHeader]">
  	<div class="header-back" :class="[showBack]">
  		<span class="iconfont">&#xe641</span>
  	</div>
  	<div class="header-search" :class="[showSearch]">
  		<span class="iconfont">&#xe688</span>
  		北京公园
  	</div>
  	<router-link to="/location">
  		<div class="header-city" :class="[showCity]">
  		{{this.$store.state.city}}
  		<span class="iconfont">&#xe65d</span>
  	</div>
  	</router-link>
  </div>
</template>

<script>
export default {
  name: 'homeHead',
  props:['city'],
  data(){
  	return{
  		showHeader:'',
  		showBack:'',
  		showSearch:'',
  		showCity:''
  	}
  },
  methods:{
		scrollChange(){
			//获取滚动距离
			let height = document.documentElement.scrollTop
			if(height>10){
				this.showHeader = 'showHeader'
				this.showBack = 'showBack'
				this.showSearch = 'showSearch'
				this.showCity = 'showCity'
			}else{
				this.showHeader = ''
				this.showBack = ''
				this.showSearch = ''
				this.showCity = ''
			}
		}
	},
	//监听滚动距离
	mounted(){
		window.addEventListener('scroll',this.scrollChange)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
	.showHeader
		background:#fff
	.header
		line-height:.88rem
		text-align:center
		display:flex
		.showBack
			color:#000
		.header-back
			float:left
			width:.9rem
		.header-search
			flex:1
			height:.6rem
			line-height:.6rem
			margin-top:.18rem
			margin-left:.2rem
			margin-right:.2rem
			border-radius:.5rem
			box-shadow:0 0 .01rem .02rem #ccc
		.showSearch
			color:#aaa
			background:#eee
		.header-city
			float:right
			width:1.4rem
		.showCity
			color:#000
</style>