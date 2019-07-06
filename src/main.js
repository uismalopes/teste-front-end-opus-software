import Vue from 'vue'
import App from './App.vue'
import './scss/main.scss'
import LazyLoadDirective from '@/directives/LazyLoadDirective'

Vue.config.productionTip = false

Vue.directive("lazyload",LazyLoadDirective)

new Vue({
  render: h => h(App),
}).$mount('#app')
