import Vue from 'vue';
import App from './App.vue';

import 'normalize.css/normalize.css';
import '@fortawesome/fontawesome-free/js/all';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
