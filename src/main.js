import {
  createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import './assets/css/reset.less';

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.mount('#app');