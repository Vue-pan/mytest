<template>
  <div class="hot">
  	<div class="hot-left">
  		<div class="left-counter">
  			<div class="limit">限时抢购</div>
  			<div class="count">距离结束 <span>02</span>:<span>03</span>:<span>02</span></div>
  		</div>
  		<div class="left-content"
  			 v-for="item of hotContentList"
  			 :key="item.id"
  		>
  			<div class="content-img">
  				<img :src="item.imgUrl">
  			</div>
  			<div class="content-desc">{{item.desc}}</div>
  		</div>
  		<div class="left-prise"
  			 v-for="item of hotPriseList"
  			 :key="item.id"
  		>
  			<div class="prise-sale">
  				限量<span>{{item.num}}份</span>
  			</div>
  			<div class="prise-num">
  				<span>¥</span>{{item.prise}}<span>起</span>
  			</div>
  		</div>
  	</div>
  	<div class="hot-right">
  		<div class="right-item"
  			 v-for="item of hotRightList"
  			 :key="item.id"
  		>
  			<div class="item-desc">
  				{{item.title}}
  				<p>{{item.subTitle}}</p>
  			</div>
  			<div class="item-img">
  				<img :src="item.imgUrl">
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'homeHot',
  props:{
  	hotContentList:Array,
  	hotPriseList:Array,
  	hotRightList:Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
@import '~@/assets/style/mixins.styl'
	.hot
		clear:left
		border-top:.2rem solid #eee
		overflow:hidden
		height:0
		padding-bottom:33.5%
		background:#fff
		.hot-left
			overflow:hidden
			width:50%
			height:0
			padding-bottom:70%
			float:left
			.left-counter
				overflow:hidden
				width:100%
				height:0
				padding-bottom:19.15%
				.limit
					font-weight:bold
					color:red
					float:left
					padding-top:.2rem
					padding-left:.1rem
				.count
					float:right
					padding-top:.2rem
					padding-right:.1rem
				.count>span
					background:#000
					color:#fff
			.left-content
				overflow:hidden
				width:100%
				height:0
				padding-bottom:31.7%
				float:left
				display:flex
				min-width:0
				.content-img
					overflow:hidden
					width:31.7%
					height:0
					padding-bottom:31.7%
				.content-img>img
					max-width:100%
					padding:.1rem
				.content-desc
					overflow:hidden
					width:68.3%
					padding-bottom:31.7%
					margin-left:.1rem
					ellipsis()
					line-height:.42rem
			.left-prise
				overflow:hidden
				width:100%
				height:0
				padding-bottom:19.15%
				.prise-sale
					float:left
					font-weight:bold
					margin-left:.1rem
					margin-top:.2rem
				.prise-sale>span
					display:inline-block
					color:#aaa
				.prise-num
					float:right
					margin-right:.2rem
					margin-top:.2rem
					color:red
		.hot-right
			overflow:hidden
			width:49%
			height:0
			padding-bottom:49%
			border-left:.05rem solid #eee
			background:#fff
			.right-item
				position:relative
				overflow:hidden
				width:100%
				height:0
				padding-bottom:34.5%
				background:#fff
				border-bottom:.03rem #eee solid
				.item-desc
					padding:.2rem
					font-weight:bold
				.item-desc>p
					color:#ccc
					margin-top:.2rem
				.item-img>img
					position:absolute
					top:.05rem
					right:0
					width:30%
					border-radius:.6rem
					max-width:100%
					max-height:100%
</style>








