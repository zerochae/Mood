import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router';
import mitt from 'mitt'

let emitter = mitt();

let app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.use(router).mount('#app')
