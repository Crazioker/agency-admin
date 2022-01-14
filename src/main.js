import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './icons';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

if(process.env.NODE_ENV === 'development'){
  Vue.config.devtools = true;
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
