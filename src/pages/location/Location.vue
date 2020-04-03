<template>
  <div>
  	<div class="load" v-if="loading">loading...</div>
  	<location-header :cities="cities"></location-header>
  	<location-list 
	  	:letter="letter"
	  	:hotCities="hotCities"
	  	:cities="cities"
  	>
  	</location-list>
  	<location-alphabet 
  		@change="handleLetterChange"
  		:alphabetList="alphabetList"
  	>
  	</location-alphabet>
  </div>
</template>

<script>

import locationHeader from './components/locationHeader'
import locationList from './components/locationList'
import locationAlphabet from './components/locationAlphabet'

import axios from 'axios'

export default {
  name: 'Location',
  components:{
  	locationHeader,
  	locationList,
  	locationAlphabet
  },
  methods:{
  	handleLetterChange(letter){
  		this.letter = letter
  	},
  	getLocationData(){
  		axios.get("/api/city.json")
  			.then(this.getLocationDataSuccess)
  	},
  	getLocationDataSuccess(res){
  		console.log('location-res:',res)
  		this.loading = false
  		const result = res.data
  		if(result.data){
  			const data = result.data
  			this.hotCities = data.hotCities
  			this.cities = data.cities
  			this.alphabetList = data.alphabetList
  		}
  	}
  },
  mounted(){//当页面加载完就执行
  	this.getLocationData()
  },
  data(){
  	return{
  		letter:'',
  		hotCities:[],
  		cities:{},
  		alphabetList:[],
  		loading:true
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
	.load
		position:absolute
		top:7rem
		left:3rem
		z-index:1011
		width:1.8rem
		height:.5rem
		line-height:.5rem
		opacity:.3
		background:#000
		color:#fff
		text-align:center
		padding:.1rem
</style>





