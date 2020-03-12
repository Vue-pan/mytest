<template>
  <div class="week">
  	<div class="week-desc">
  		<div class="week-desc-content">
  			////////<span>周末周末</span>////////
  			<p>致力推荐超美套餐</p>
  		</div>
  	</div>
  	<div class="week-swiper">
  		<swiper :options="swiperOption">
		    <swiper-slide
		    	v-for="item of weekSwiperList"
	    		:key="item.id"
		    >
		    	<div class="weekSwiper-item">
		    		<div class="weekSwiper-item-img">
		    			<img :src="item.imgUrl">
		    		</div>
		    		<div class="weekSwiper-item-desc">
		    			{{item.title}}
		    			<p>{{item.subTitle}}</p>
		    		</div>
		    	</div>
		    </swiper-slide>
  		</swiper>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  data(){
  	return{
  		weekSwiperList:[
  			{
  				id:'000z1',
  				imgUrl:'http://img2.imgtn.bdimg.com/it/u=4035618483,1210925427&fm=26&gp=0.jpg',
  				title:'岩石窟',
  				subTitle:'特有岩石风景'
  			},
  			{
  				id:'000z2',
  				imgUrl:'http://img4.imgtn.bdimg.com/it/u=152852254,3260972280&fm=26&gp=0.jpg',
  				title:'海牙湾',
  				subTitle:'特有海边风景'
  			},
  			{
  				id:'000z3',
  				imgUrl:'http://attach.bbs.miui.com/forum/201312/03/165620x7cknad7vruvec1z.jpg',
  				title:'山水峡',
  				subTitle:'特有山水风景'
  			},
  		],
  		swiperOption:{
  			freeMode:true,
  			spaceBetween:20,
  			slidesPerView:3
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<!-- max-width:100%:表示最大宽度不超过它的整体 -->
<!-- 
	1.宽高比固定写法：
	  overflow:hidden
	  height:0
	  padding-bottom:58%

	2.垂直居中写法:
      position:absolute
      top:50%
      left:50%
      transform:translate(-50%,-50%)	

    3.灰边写法
      border-top:.2rem solid #eee   
 -->
<style lang="stylus" scoped>
	.week
		overflow:hidden
		height:0
		padding-bottom:58%
		border-top:.2rem solid #eee
		.week-desc
			position:relative
			overflow:hidden
			height:0
			padding-bottom:15.5%
			.week-desc-content
				text-align:center
				color:#aaa
				position:absolute
				top:50%
				left:50%
				transform:translate(-50%,-50%)
			.week-desc-content>span
				color:#000
				font-weight:bold
				margin:.15rem .3rem 
			.week-desc-content>p
				margin-top:.15rem
		.week-swiper
			overflow:hidden
			height:0
			padding-bottom:84.5%
			width:100%
			.weekSwiper-item
				overflow:hidden
				height:0
				padding-bottom:120%
				width:100%
				margin-left:.1rem
				border:.02rem solid #ccc
				.weekSwiper-item-img
					overflow:hidden
					height:0
					padding-bottom:67.9%
				.weekSwiper-item-img>img
					max-width:100%
				.weekSwiper-item-desc
					text-align:center
					margin-top:.2rem
				.weekSwiper-item-desc>p
					margin-top:.1rem
</style>




