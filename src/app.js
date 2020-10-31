// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle';
//import Framework7Vue from 'framework7-vue';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import './css/icons.css';
import './css/app.scss';
import './css/app-style.css';

// Import App Component
import App from './App.vue';


// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),

  // Register App Component
  components: {
    App
  },
});
