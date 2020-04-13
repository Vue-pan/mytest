<template>
	<div class="content">
		<div class="content-map" ref="allMap"></div>
		<div class="content-tab">
			<div 
				class="content-tab-arrow"
				@click="handleArrowClick"
			>v</div>
			<navbar v-model="selected">
				<tab-item id="1">酒店</tab-item>
				<tab-item id="2">景点</tab-item>
			 </navbar>
			 <tab-container v-model="selected">
				 <tab-container-item id="1">
					  <cell 
						v-for="item of addressList[0]" 
						:title="item.title"
						:label="item.label"
						:key="item.id"
						@click.native="handleCellClick(item.id)"
					  />
				 </tab-container-item>
				 <tab-container-item id="2">
					  <cell 
						v-for="item of addressList[1]" 
						:title="item.title"
						:label="item.label"
						:key="item.id"
						@click.native="handleCellClick(item.id)"
					  />
				 </tab-container-item>
			 </tab-container>
		</div>
	</div>
</template>

<script>
import { 
   Navbar, 
   TabItem,
   TabContainer,
   TabContainerItem,
   Cell
 } from 'mint-ui'
import markerImg from '../../../assets/img/marker.png'
export default {
  name: 'mapContent',
  props:{
  	addressList:Array
  },
  components:{
	Navbar, 
	TabItem,
	TabContainer,
	TabContainerItem,
	Cell
  },
  data(){
	return{
		flag:1,
		selected:'1',
		clickFlag:'0'
	}
  },
  mounted(){
	this.addMasker(0,0)
  },
  watch:{//监听是左边菜单还是右边菜单
	selected(val){
		//console.log('val:',val)
		if(val==='1'){//左边
			this.flag = 1
		}else{
			this.flag = 2
		}
	}
  },
  methods:{
	handleArrowClick(){
		if(this.clickFlag==='0'){
			this.$refs.allMap.style.height = '20%'
			this.clickFlag = '1'
		}else{
			this.$refs.allMap.style.height = '60%'
			this.clickFlag = '0'
		}
	},
	handleCellClick(id){
		let page = parseInt(this.flag)-1
		let index = parseInt(id)-1
		this.addMasker(page,index)
	},
	addMasker(x,y){
		let map = new BMap.Map(this.$refs.allMap)
		map.enableScrollWheelZoom(true)
		//添加标注
		let myGeo = new BMap.Geocoder()
		for(let i=0;i<this.addressList.length;i++){
			for(let j=0;j<this.addressList[i].length;j++){
			let defaultAddress = this.addressList[x][y]
				myGeo.getPoint(this.addressList[i][j].title,function(point){
					//console.log(point)
					if(point){
						if(i===x && j===y){
							//缩放等级
							map.centerAndZoom(point,15)
							let myIcon = new BMap.Icon(markerImg,new BMap.Size(50,50),{//设置周边距离
								imageOffset:new BMap.Size(14,2)
							})
							let marker = new BMap.Marker(point,{icon:myIcon})
							map.addOverlay(marker)
							//添加信息窗
							let infoWindow = new BMap.InfoWindow(defaultAddress.title)
							infoWindow.setWidth(80)
							infoWindow.setHeight(40)
							map.openInfoWindow(infoWindow,map.getCenter())
						}else{
							//缩放等级
							//map.centerAndZoom(point,15)
							let marker = new BMap.Marker(point)
							map.addOverlay(marker)
						}
					}else{
						console.log('对不起，找不到')
					}
				})
			}
		}
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
.content
	position:absolute
	top:.88rem
	left:0
	right:0
	bottom:0
	background:#fff
	z-index:120
	.change
		height:30%
	.content-map
		height:60%
		position:relative
		top:0
		left:0
		right:0
		bottom:.6rem
		z-index:130
	.content-tab
		color:#000
		.content-tab-arrow
			text-align:center


</style>




