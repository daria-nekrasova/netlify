
import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';

import './assets/css/main.css';
import './assets/css/fonts.css';
import './assets/css/slick-theme.css';
import './assets/css/slick.css';

// import './assets/js/jquery-3.5.0.js';
// import './assets/js/slick.min.js';
// import './assets/js/main.min.js';

Vue.config.productionTip = false;

Vue.use(NowUiKit);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
