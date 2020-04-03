<template>
	<div>
		<div class="search">
		<span class="iconfont">&#xe688</span>
		<input
			type="text"
			class="search-input"
			placeholder="请输入城市名（如北京、bj、beijing）"
			v-model="keyword"
			:class="[changeSearch]"
		>
		<button 
			class="button"
			:class="[changeButton]"
			@click="buttonClearClick"
		>取消</button>
		<span 
			class="cancel"
			:class="[changeSymbol]"
			@click="xClearClick"
		>X</span>
		</div>
		<div 
			class="search-content"
			ref="contentWrapper"
			v-show="this.list.length"
		>
			<ul>
				<li class="search-first">{{this.show}}</li>
				<li 
					class="search-item"
					v-for="item of list"
					:key="item.id"
          @click="handleItemClick(item.name)"
				>{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>

import BScroll from 'better-scroll'
import {disreslove} from '../../../utils/utils.js'

export default {
  name: 'locationHeader',
  props:{
  	cities:Object
  },
  mounted(){
  	this.scroll=new BScroll(this.$refs.contentWrapper,{
  		click:true,
  		mouseWheel:{
  			speed:20,
  			invert:false,
  			easeTime:300
  		}
  	})
  },
  data(){
  	return{
  		flag:'1',
  		keyword:'',
  		changeSearch:'',
  		changeButton:'',
  		changeSymbol:'',
  		iLetter:'',
  		show:"请输入城市名（如北京、bj、beijing)",
      iWord:'',
  		list:[
  			
  		]
  	}
  },
  methods:{
  	buttonClearClick(){
  		this.flag = '2'
  		this.keyword = ' '
  	},
  	xClearClick(){
  		this.flag = '22'
  		this.keyword = ' '
  	},
  	addClass(){
  		this.changeSearch = "changeSearch"
  		this.changeButton = "changeButton"
  		this.changeSymbol = "changeSymbol"
  	},
  	removeClass(){
  		this.changeSearch = ""
  		this.changeButton = ""
  		this.changeSymbol = ""
  	},
  	removeBack(){
		this.list = []
		this.show = ''
		this.removeClass()
  	},
  	showError(content){
  		this.list = ['']
		this.show = "对不起，找不到"+content
  	},
    handleItemClick(city){
      //更新城市数据
      this.$store.dispatch('cityChange',city)
      //跳转到跟目录
      this.$router.push('/')
    },
  	loopAlphabet(lowerContent){
  		const citiesWrapper = this.cities
  		for(let i in citiesWrapper){
  			let haveAlph = i.toLowerCase().indexOf(lowerContent.substr(0,1))>-1
  			if(haveAlph){
  				let arr = []
  				citiesWrapper[i].forEach((value)=>{
  					arr.push(value.spell.substr(lowerContent.length-1,1))
  					//数组去重
  					let a = [...new Set(arr)]
  					this.iLetter = a.toString()
				})
  			}
  		}
  	},
    loopWord(content){
      const citiesWrapper = this.cities
      for(let i in citiesWrapper){
        let haveAlph = i.toLowerCase().indexOf(disreslove(content.substr(0,1)).substr(0,1))>-1
        if(haveAlph){
          let arr = []
          citiesWrapper[i].forEach((value)=>{
            arr.push(value.name.substr(content.length-1,1))
            //数组去重
            let a = [...new Set(arr)]
            this.iWord = a.toString()
        })
        }
      }
    },
  	searchAlph(content){
  		//字母转小写
  			const lowerContent = content.toLowerCase()
  			let result = []
  			for(let i in this.cities){
  				let haveAlph = i.toLowerCase().indexOf(lowerContent.substr(0,1))>-1
  				if(haveAlph){//第一个字母在城市列表中存在
  					this.cities[i].forEach((value)=>{
  						if(value.spell.indexOf(lowerContent)>-1){
  							result.push(value)
  							this.list = result
  						}else if(lowerContent.indexOf(value.spell)>-1){//输入超过汉字范围
  							this.show = "对不起，找不到"+content
  						}else{
                //判断某一位错误
  							this.loopAlphabet(lowerContent)
  							let flag = this.iLetter.indexOf(lowerContent.substr(lowerContent.length-1,1))>-1
  							if(!flag){
	  							this.show = "对不起，找不到"+content
	  							this.iLetter = ''
  							}else{
  								this.show = ''
  							}
  						}
  					})
  				}else if(lowerContent.substr(0,1)==='u'
  						 || lowerContent.substr(0,1)==='i'
  						 || lowerContent.substr(0,1)==='v'
  						 ||lowerContent.substr(0,1)==='o'
  						){//第一个字母在城市列表中不存在
  							this.show = "对不起，找不到"+content
  							this.list = ['']
  				}
  			}
  	}
  },
  watch:{
  	keyword(){
  		//去掉输入内容左右的空隔
  		let content =this.keyword.trim()
  		this.addClass()
  		if(content === ''){//判断内容为空
  			//flag代表内容为空时的区分标志位
  			if(this.flag === '1'){//本身没输入或者逐字清除
  				this.removeBack()
  			}else if(this.flag === '2'){//点击清除按钮
  				this.keyword = ''
  				this.removeBack()
  			}else{//点击X按钮
  				this.keyword = ''
  				this.show = ""
  			}
  		}else if(/^[0-9]+$/.test(content)){//内容为数字
  			this.showError(content)
  		}else if(/^[a-zA-Z]+$/.test(content)){//内容为字母
  			this.searchAlph(content)
  		}else if(/^[\u4e00-\u9fa5]+$/.test(content)){//内容为汉字
        //=============================
          let result = []
          for(let i in this.cities){
            //将汉字转化为拼音
            let haveAlph = i.toLowerCase().indexOf(disreslove(content.substr(0,1)).substr(0,1))>-1
            if(haveAlph){//第一个字母在城市列表中存在
              this.cities[i].forEach((value)=>{
                if(value.name.indexOf(content)>-1){
                  result.push(value)
                  this.list = result
                }else if(content.indexOf(value.name)>-1){//输入超过汉字范围
                  this.show = "对不起，找不到"+content
                }else{
                  //判断某一位错误
                  this.loopWord(content)
                  let flag = this.iWord.indexOf(content.substr(content.length-1,1))>-1
                  if(!flag){
                    this.show = "对不起，找不到"+content
                    this.iWord = ''
                  }else{
                    this.show = ''
                  }
                }
              })
            }
          }
        //=============================
  		}else{//其他内容
  			this.showError(content)
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 1rem=50px -->
<style lang="stylus" scoped>
.search
	position:relative
	height:.72rem
	background:#e0e4ec
	padding:.2rem
	.iconfont
		position:absolute
		top:.4rem
		left:.4rem
		color:#666
	.search-input
		height:.72rem
		line-height:.72rem
		width:100%
		border-radius:.06rem
		text-align:left
		box-sizing:border-box
		padding-left:.6rem
		color:#666
	.changeSearch
		width:88%
		margin-right:.1rem
	.button
		display:none
	.changeButton
		display:block
		color:#888
		font-weight:bold
		position:absolute
		top:.29rem
		right:.22rem
		z-index:101
		font-size:.35rem
		text-align:center
	.cancel
		display:none
	.changeSymbol
		display:block
		position:absolute
		top:.32rem
		right:1.3rem
		color:#fff
		z-index:101
		background:#ccc
		padding:.12rem
		border-radius:.5rem
.search-content
	overflow:hidden
	position:absolute
	z-index:101
	top:1.1rem
	left:0
	right:0
	bottom:0
	background:#eee
	.search-first
		line-height:.22rem
		padding:.1rem
		margin-bottom:.06rem
		color:#666
		background:#fff
		font-size:.1rem
	.search-item
		line-height:.82rem
		padding-left:.2rem
		margin-bottom:.06rem
		color:#666
		background:#fff

</style>








