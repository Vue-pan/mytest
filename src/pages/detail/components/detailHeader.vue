<template>
	<div class="header">
		<div 
		class="left"
		@click="backClick"
		>
			<span class="iconfont">&#xe79b;</span>
		</div>
		<div class="middle">酒店+景点</div>
		<div class="right">
			<span class="iconfont">&#xe637;</span>
		</div>
	</div>
</template>

<script>


export default {
  name: 'detailHeader',
  methods:{
  	backClick(){
  		this.$router.go(-1)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
.header
	line-height:.88rem
	background:#fff
	display:flex
	.left
		float:left
		margin-left:.2rem
		color:#23beae
	.middle
		flex:1
		text-align:center
		font-weight:bold
	.right
		float:right
		margin-right:.5rem
		color:#23beae

</style>








