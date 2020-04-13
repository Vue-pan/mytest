import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{//存放数据
		city:'北京',
		detailMenuIndex:0
	},
	actions:{//异步调取
		cityChange(ctx,city){
			//派发数据,在mutations中执行cityChange
			ctx.commit('cityChange',city)
		}
	},
	mutations:{//更改状态
		cityChange(state,city){
			state.city = city
		}
	}
})