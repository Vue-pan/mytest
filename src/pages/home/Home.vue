<template>
	<div class="home">
		<home-head class="home-head" :city="city"></home-head>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-catalog :iconList="iconList"></home-catalog>
		<home-hot
			:hotContentList="hotContentList"
			:hotPriseList="hotPriseList"
			:hotRightList="hotRightList"
		></home-hot>
		<home-weekend :weekendList="weekendList"></home-weekend>
		<home-guess :guessList="guessList"></home-guess>
	</div>
</template>

<script>

import homeHead from './components/homeHead'
import homeSwiper from './components/homeSwiper'
import homeCatalog from './components/homeCatalog'
import homeHot from './components/homeHot'
import homeWeekend from './components/homeWeekend'
import homeGuess from './components/homeGuess'

import axios from 'axios'

export default {
  name: 'Home',
  components:{
  	homeHead,
  	homeSwiper,
  	homeCatalog,
  	homeHot,
  	homeWeekend,
  	homeGuess
  },
  data(){
  	return{
  		city:'',
  		swiperList:[],
  		iconList:[],
  		guessList:[],
  		hotContentList:[],
  		hotPriseList:[],
  		hotRightList:[],
  		weekendList:[],
  	}
  },
  methods:{
  	getHomeData(){
  		axios.get("/api/index.json")
  			.then(this.getHomeDataSuccess)
  	},
  	getHomeDataSuccess(res){
  		console.log('res:',res)
  		const result = res.data
  		if(result.data){
  			const data = result.data
  			this.city = data.city
  			this.swiperList = data.swiperList
  			this.iconList = data.iconList
  			this.guessList = data.guessList
  			this.hotContentList = data.hotContentList
  			this.hotPriseList = data.hotPriseList
  			this.hotRightList = data.hotRightList
  			this.weekendList = data.weekendList
  		}
  	}
  },
  mounted(){//当页面加载完就执行
  	this.getHomeData()
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
			position:fixed
			top:0
			left:0
			z-index:100
			width:100%
</style>
