/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import Vuelidate from 'vuelidate';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import VueSimpleAlert from "vue-simple-alert";
import VueSweetalert2 from 'vue-sweetalert2';
   
Vue.config.productionTip = false
   
Vue.use(VueSweetalert2);

Vue.use(Vuelidate);
Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueSimpleAlert);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
