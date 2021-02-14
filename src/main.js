import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import axios from 'axios'

axios.defaults.baseURL = 'https://vue-http-fulano.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

// const reqInterceptor = axios.interceptors.request.use(config => {
//   console.log('Request Interceptor', config)
//   return config
// })
// const resInterceptor = axios.interceptors.response.use(res => {
//   console.log('Response Interceptor', res)
//   return res
// })

// axios.interceptors.request.eject(reqInterceptor)
// axios.interceptors.response.eject(resInterceptor)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')