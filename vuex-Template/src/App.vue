<template>
  <div>

  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default {
    data(){
        let test = '我是test'
        return {
            test
        }
    },
    //一： state的获取方式只介绍以下三种（其实使用第三种就行了）
    // 1.直接获取:this.$store.state.firstPart.name，在template中$store.state.firstPart.name
    // 2.如果需要用到this获取当前组件状态，用这种
    // computed: mapState({
    //     nameOne (state) {
    //          return state.firstPart.name + this.test
    //     }
    // })
    // 3. ...mapsatate()写法,多用这种
    // computed:{
    //    ...是ES6规范，需要使用按以下方式
    //    .babelrc
    //    "presets": [
    //     "es2015",
    //    "stage-3",
    //    ],
    //     npm install --save-dev babel-cli
    //     npm install --save-dev babel-preset-es2015
    //     npm install --save-dev babel-preset-stage-3
    //     ...mapState('firstPart',{//前面相当于命名空间的路径
    //     前面是计算属性真名，后面是需要从state映射过来的值
    //         nameTwo:state => state.name
    //     })
    // },

    // 二、getters的获取
    // computed: {
    //      ...mapGetters('firstPart',{
    //          gettersOne:'gettersThree'
    //      })
    // },


    // mounted(){

    // }

    //三：mutations和actions的触发方法
    mounted(){
        // 1.mutations触发（ namespaced为true,需要带module名（firstPart/mutationsOne）,namespaced为false,直接commit('mutationsOne')）
        //this.$store.commit('firstPart/mutationsOne',{param:'页面commit传递的值'});
        // 2.actions触发（ namespaced为true,需要带module名（firstPart/mutationsOne）,namespaced为false,直接dispatch('mutationsOne')）
        //this.$store.dispatch('firstPart/actionsOne',{params:'1'}).then(()=>{console.log('执行actions后的then操作')})
        // 3.使用async函数(这一条需要babrl转码generator函数才行)
        //1.npm install --save-dev babel-polyfill
        //2.webpack.config.js:var babelpolyfill = require("babel-polyfill");
        //3.main.js import "babel-polyfill";
        // this.$store.dispatch('firstPart/actionsFour');
        this.$store.dispatch('firstPart/actionsFour');
    }
}
</script>
