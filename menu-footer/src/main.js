import Vue from 'vue'
import App from './App.vue'
import './assets/scss/app.scss'
import NuxtLink from "./components/NuxtLink";

Vue.config.productionTip = false

Vue.component('nuxt-link', NuxtLink)

new Vue({
  render: h => h(App),
}).$mount('#app')
