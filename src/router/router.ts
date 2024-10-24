import { createWebHistory, createRouter } from 'vue-router'
import Chat from '@/components/Chat.vue';
import Login from '@/Pages/Login/Login.vue';
const routes = [
  { path: '/', component: Login },
  { path: '/about', component: Chat }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;