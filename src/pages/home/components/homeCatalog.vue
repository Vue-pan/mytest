<template>
  <div class="wrapper">
  	<div class="icon" 
  		 v-for="item of catalogList"
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
  data(){
  	return{
  		red:'red',
  		blue:'blue',
  		orange:'orange',
  		green:'green',
  		catalogList:[
  			{
  				id:'0001',
  				imgUrl:'http://thumbs.dreamstime.com/t/释放行情-页象-特别黄色圆的按钮-104723572.jpg',
  				desc:'目录一',
  				color:'orange'
  			},
  			{
  				id:'0002',
  				imgUrl:'http://thumbs.dreamstime.com/t/音乐象典雅的黄色圆的按钮-100204631.jpg',
  				desc:'目录二',
  				color:'red'
  			},
  			{
  				id:'0003',
  				imgUrl:'http://thumbs.dreamstime.com/t/释放行情-页象-特别黄色圆的按钮-104723572.jpg',
  				desc:'目录三',
  				color:'blue'
  			},
  			{
  				id:'0004',
  				imgUrl:'http://thumbs.dreamstime.com/t/书象典雅的红色圆的按钮-104815051.jpg',
  				desc:'目录四',
  				color:'green'
  			},
  		]
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











