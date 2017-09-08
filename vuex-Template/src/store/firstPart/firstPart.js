import {serviceOne} from '../../services/firstPartService';

const firstPart = {
	//本用法将namespaced设置为true
	namespaced:true,//namespace作用，不加namespace在该模块内的getters\multations\actions在全局仍可见，加了以后，局部可见
	state:{
		name:"我是firstPart的name属性的值"
	},
	getters:{//就是state的计算属性，state改变会触发getters的改变.下面的参数state和getters都是当前module内的state和getters
		gettersOne(state){return '我是getters1'},
		//getters也能对getters进行处理
		gettersTwo(state,getters){
			return getters.gettersOne + '加上gettersTwo'
		},
		//getters也能获取外部state(rootState),就是根节点state
		gettersThree(state,getters,rootState){
			return '我是获取了根节点的getters' + rootState + '加上gettersThree'
		}
	},
	mutations:{
		//同步，改变state的唯一方式，可以通过actions或commit
		//下面这个state为当前命名空间state,param由组件commit触发（无论namespaced取值，都是局部state）
		//注意：namespaced为true,用this.$store.commit('firstPart/mutationsOne',param)来触发（此时mutations全局可访问，所以所有mutations命名尽量避免重名）
		//namespaced为false,用this.$store.commit('mutationsOne',param)来触发（此时mutations仅限局部）
		mutationsOne(state,payload){
			console.log(state);//当前命名空间state
			console.log(payload);//组件传过来的参数
		}
	},
	actions:{
		// actions有以下几种写法
		// actions用来做任何异步操作
		// 下面这种写法使用了参数解构，原本模式是这样actionsOne(context){ context.commit('mutationsOne',1)}
		actionsOne({commit,state,dispatch},payload){
			console.log(payload);//组件传过来的参数
			console.log(state);//当前命名空间state
			commit('mutationsOne',{params:'actionsOne触发了mutationsOne'});//触发mutations
			setTimeout(()=>{console.log('我是actionsOne执行的异步操作')},2000)//执行异步操作
			dispatch('actionsTwo',{params:'actionsOne触发了actionsTwo'}).then(() => {console.log(1)})
		},
		actionsTwo({commit,state,dispatch},payload){
			console.log(payload);
			console.log('actionsOne出发了actionsTwo')
		},
		// 下面的内容还有待研究（等学习完ES6和基础知识再来进行封装）,思路，将所有请求封装成async函数提取到单独的文件里进行管理，引入到当前actions中
		// await 等待返回请求的数据，返回的是一个Promise对象
		// 可以用async函数专门封装数据请求，用await来等待其它函数执行完，async(generator)函数需要polyfill进行ES6转码
		 actionsThree({commit,state,dispatch},payload){
		 	setTimeout(()=>{console.log('actionsThree执行完了')},2000)
		 	return 1
		 },
  		async actionsFour({dispatch}){
			const Info = await serviceOne();
			console.log(Info);
			const three = await dispatch('actionsThree')
			console.log(three);
  		}
	}
}

export default firstPart
