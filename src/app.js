import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import { sync } from 'vuex-router-sync'

sync(store, router)

// 앱 인스턴스 생성
// 여기서 모든 자식 컴포넌트에 라우터와 저장소를 주입.
// 라우터를 사용하려면 this.$router, store를 사용하려면 this.$store로 접근한다.
const app = new Vue({
  router,
  store,
  ...App
})

// 부트 스트랩 되며 앱을 마운트 하지 않고, 브라우저인지 서버에 있는지에 따라 다르게 동작한다.
export { app, router, store }
