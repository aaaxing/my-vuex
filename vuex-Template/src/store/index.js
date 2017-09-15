import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import firstPart from './firstPart/firstPart'
import secondPart from './secondPart/secondPart'

export default new Vuex.Store({
	modules:{//modules一般按照在路由中的页面为单位划分，因为路由跳转，state就会还原为最初的状态，不会缓存。所以vuex的状态需要和缓存的业务区分开来
		firstPart:firstPart,
		secondPart:secondPart
	}
})