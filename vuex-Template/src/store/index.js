import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import firstPart from './firstPart/firstPart'
import secondPart from './secondPart/secondPart'

export default new Vuex.Store({
	modules:{
		firstPart:firstPart,
		secondPart:secondPart
	}
})