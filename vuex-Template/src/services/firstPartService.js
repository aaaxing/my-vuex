import "babel-polyfill";


export function serviceOne(){
	return new Promise(function(resolve,reject){
		
		setTimeout(()=>{resolve({status:200,name:'我的名字',age:'18'})},2000)
		
	}).catch()
}
