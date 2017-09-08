import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import "babel-polyfill";

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
