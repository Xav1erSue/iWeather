import { createApp } from 'vue';
import App from './App.vue';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import store from './store';
import 'virtual:windi.css';

createApp(App).use(store).use(ArcoVue).mount('#app');
