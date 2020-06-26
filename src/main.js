import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false //app is in dev mode

// new Vue instance
new Vue({
  router,
  render: h => h(App) //app rendered with App template
}).$mount('#app') //mounted to DOM element with id being app
