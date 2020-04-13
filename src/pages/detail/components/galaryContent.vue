<template>
	<div class="galary-content">
		<div class="wrapper">
			<div 
				class="imgWrapper"
				v-for="item of imgList[this.detailMenuIndex][this.detailMenuIndex]"
				:key="item.id"
			>
				<img 
					:src="item.imgUrl"
					@click="handlePictureClick"
				>
			</div>
		</div>
		<div 
			class="galary"
			v-show="show"
			:length = "length"
		>
			<swiper :options="swiperOption">
					<swiper-slide 
						v-for="item of imgList[this.detailMenuIndex][this.detailMenuIndex]"
						:key="item.id"
						>
							<div class="galary-desc">
								{{parseInt(item.id)+1}}/{{length}}
							</div>
							<div class="galary-img">
								<img :src="item.imgUrl">
							</div>
					</swiper-slide>
				</swiper>
				<span 
					class="cancelButton"
					@click="cancelButtonClick"
				>X</span>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'galaryContent',
	computed:mapState(['detailMenuIndex']),
	props:{
		imgList:Array
	},
	data(){
		return{
			show:false,
			length:1,
			swiperOption:{
				loop:false
			}
		}
	},
	methods:{
		handlePictureClick(){
			this.length = this.imgList[this.detailMenuIndex][this.detailMenuIndex].length
			this.show = true
		},
		cancelButtonClick(){
			this.show = false
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
.wrapper
	background:#fff
	.imgWrapper
		width:46%
		background:#aaa
		margin:.12rem
		float:left
	.imgWrapper>img
		width:100%
.galary
	position:absolute
	top:-0.86rem
	left:0
	right:0
	bottom:0
	background:#000
	color:#fff
	.galary-desc
		text-align:center
		font-size:.3rem
		padding:1.2rem
	.galary-img
		margin-top:2rem
	.galary-img>img
		width:100%
	.cancelButton
		font-size:.5rem
		position:relative
		left:3.5rem
		bottom:-2rem
		color:#fff
</style>




