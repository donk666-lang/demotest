import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';
import Home from '../pages/Home.vue';
import Index from '../pages/Index.vue';

const routes = [{
  path: '/',
  redirect: '/home',
},
// demo1
{
  path: '/home',
  name: 'demo1',
  component: Home,
},
// demo2
{
  path: '/index',
  name: 'demo2',
  component: Index,
}];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;