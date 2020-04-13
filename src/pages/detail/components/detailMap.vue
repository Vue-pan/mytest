<template>
	<div class="map">
		<router-link to="mapContent" append>
			<div class="map-left">
				<div class="map-left-desc">
					<span>广州</span>
					<span class="address">酒店地址</span>
				</div>
				<div class="map-left-address">广州天河区xxxxx18号</div>
			</div>
			<div class="map-right">
				<div class="desc">地图</div>
				<div class="icon">></div>
			</div>
		</router-link>
	</div>
</template>

<script>


export default {
  name: 'detailMap',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
.map
	height:1.5rem
	font-size:.3rem
	background:#fff
	.map-left
		float:left
		width:80%
		.map-left-desc
			margin-left:.2rem
			margin-top:.2rem
			margin-bottom:.2rem
			font-weight:bold
		.address
			border:.02rem solid #000
			color:#aaa
		.map-left-address
			padding:.2rem
			color:#aaa
	.map-right
		float:right
		width:20%
		text-align:center
		position:relative
		.desc
			position:absolute
			top:.6rem
			right:.6rem
			color:#aaa
		.icon
			position:absolute
			top:.6rem
			right:.2rem

</style>







