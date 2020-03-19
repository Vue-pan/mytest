<template>
	<div class="guess">
		<div 
			class="guess-desc"
			:class="[guessDescChange]"
		>
			<div>猜你喜欢</div>
		</div>
		<div class="guess-content"
				v-for="item of guessList"
				:key="item.id"
		>
			<div class="guess-content-img">
				<img :src="item.imgUrl">
				<div>{{item.rank}}</div>
			</div>
			<div class="guess-content-desc">
				{{item.desc}}
			</div>
			<div class="guess-content-prise">
				<div class="guess-content-prise-left">
					酒店距离景点{{item.distance}}km
				</div>
				<div class="guess-content-prise-right">
					<span>¥</span>{{item.prise}}<span>起</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'homeGuess',
	data(){
		return{
			guessDescChange:'',
			guessList:[
				{
					id:'000a1',
					imgUrl:'http://img4.imgtn.bdimg.com/it/u=125898676,2935128648&fm=26&gp=0.jpg',
					rank:'1202点评.98%',
					desc:'建筑风景大全有全世界最美的建',
					distance:'1.23',
					prise:'280'
				},
				{
					id:'000a2',
					imgUrl:'http://img5.imgtn.bdimg.com/it/u=1876790205,1914446402&fm=26&gp=0.jpg',
					rank:'2402点评.99%',
					desc:'建筑风景大全有全世界最美的建',
					distance:'1.50',
					prise:'299'
				},
				{
					id:'000a3',
					imgUrl:'http://img0.imgtn.bdimg.com/it/u=3252879697,959248775&fm=26&gp=0.jpg',
					rank:'120点评.95%',
					desc:'建筑风景大全有全世界最美的建',
					distance:'3.50',
					prise:'180'
				}
			]
		}
	},
	methods:{
		scrollChange(){
			//获取滚动距离
			let height = document.documentElement.scrollTop
			console.log("height:",height)
			if(height>715){
				this.guessDescChange = 'guessDescChange'
			}else{
				this.guessDescChange = ''
			}
		}
	},
	//监听滚动距离
	mounted(){
		window.addEventListener('scroll',this.scrollChange)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
	.guess
		border-top:.2rem solid #eee
		background:#fff
		.guess-desc
			overflow:hidden
			height:0
			padding-bottom:10%
			text-align:center
			color:#23beae
		.guessDescChange
			position:fixed
			top:.9rem
			left:0
			width:100%
			background:#fff
			z-index:100
		.guess-desc>div
			overflow:hidden
			height:0
			padding-bottom:6%
			width:25%
			margin:0 auto
			padding-top:.23rem
			border-bottom:.1rem solid #23beae
		.guess-content
			overflow:hidden
			width:92%
			height:0
			padding-bottom:64%
			margin:0 auto
			padding-top:.2rem
			border-top:.05rem solid #eee
			.guess-content-img
				position:relative
				overflow:hidden
				height:0
				padding-bottom:48.3%
			.guess-content-img>img
				max-width:100%
			.guess-content-img>div
				position:absolute
				bottom:.2rem
				left:.1rem
				color:#fff
			.guess-content-desc
				overflow:hidden
				height:0
				padding-bottom:12%
				text-align:left
				padding-top:.1rem
				text-indent:.1rem
				font-size:.28rem
				font-weight:bold
				letter-spacing:.01rem
				line-height:.35rem
			.guess-content-prise
				overflow:hidden
				height:0
				padding-bottom:10%
				.guess-content-prise-left
					float:left
					color:#aaa
				.guess-content-prise-right
					float:right
					margin-right:.1rem
				.guess-content-prise-right>span
					color:red
					font-weight:bold
					font-size:.4rem
</style>






