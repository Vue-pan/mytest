<template>
	<div>
		<detail-header></detail-header>
		<detail-swiper :swiperList="swiperList"></detail-swiper>
		<detail-map></detail-map>
		<router-view
			:galaryList="galaryList"
			:imgList="imgList"
			:addressList="addressList"
		></router-view>
	</div>
</template>

<script>

import detailHeader from './components/detailHeader'
import detailSwiper from './components/detailSwiper'
import detailMap from './components/detailMap'

import axios from 'axios'

export default {
	name: 'Detail',
	components:{
		detailHeader,
		detailSwiper,
		detailMap
	},
	data(){
		return{
			swiperList:[],
			galaryList:[],
			imgList:[],
			addressList:[]
		}
	},
	mounted(){//当页面加载完就执行
		this.getDetailData()
	},
	methods:{
		getDetailData(){
			axios.get("/api/detail.json?id="+this.$route.params.id)
				.then(this.getDetailDataSuccess)
		},
		getDetailDataSuccess(res){
			//console.log('detail-request-json:',res)
			const result = res.data
			if(result.data){
				const data = result.data
				this.swiperList = data.swiperList
				this.galaryList = data.galaryList
				this.imgList = data.imgList
				this.addressList = data.addressList
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>


</style>








