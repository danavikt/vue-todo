import Vue from 'vue'
import App from './App'
import '@/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  render: createElement => createElement(App)
}).$mount('#app')
