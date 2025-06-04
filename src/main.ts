
import { registerPlugins } from '@/plugins';

import App from './App.vue';

import { createApp } from 'vue';

import 'unfonts.css';
import { createPinia } from 'pinia';
import VueCookies from 'vue-cookies'

const app = createApp(App);

app.use(createPinia());
app.use(VueCookies)
registerPlugins(app);

app.mount('#app');
