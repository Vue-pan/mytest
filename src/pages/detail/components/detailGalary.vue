<template>
	<div class="galary">
		<ly-tab
			v-model="selectedId"
			class="tabColor"
			:items="items"
			:options="options"
			@change="handleChangeClick"
		>
		</ly-tab>
		<div class="cate">
			<span>全部</span>
			<span>其它</span>
		</div>
		<!-- 动态组件 -->
		<component 
			:is="type"
			:imgList="imgList"
		></component>
	</div>
</template>

<script>

import galaryContent from './galaryContent'
export default {
  name: 'detailGalary',
  props:{
  	galaryList:Array,
  	imgList:Array
  },
  data(){
	return{
		type:"galaryContent",
		selectedId:0,
		items:[],
		options:{
			activeColor:"#0bc071"
		}
	}
  },
	components:{
		galaryContent
	},
	computed:{
		loopGalaryList(){
			for(let i=0;i<this.galaryList.length;i++){
				let item = {label:this.galaryList[i]}
				this.items.push(item)
			}
		}
	},
	mounted(){
		this.loopGalaryList
	},
	methods:{
		handleChangeClick(item,index){
			this.$store.state.detailMenuIndex = index
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
.galary
	position:absolute
	top:.88rem
	left:0
	right:0
	bottom:0
	color:#fff
	z-index:100
	background:#fff
	.tabColor
		background:#fff
		border-color:#fff
	.cate
		background:#edf0f5
		line-height:.6rem
		color:#000
	.cate>span
		margin-left:.22rem
		font-size:.3rem

</style>







