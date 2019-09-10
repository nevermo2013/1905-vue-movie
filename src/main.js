import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
// 初始化html font-size
import 'lib-flexible';
// 初始化reset.css
import "@/assets/css/common/reset.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
