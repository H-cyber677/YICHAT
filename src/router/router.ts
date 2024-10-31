import { createWebHistory, createRouter } from 'vue-router'
import Chat from '@/components/Chat.vue';
import Login from '@/Pages/Login/Login.vue';
import Register from '@/Pages/Login/Register.vue'
const routes = [
  { path: '/login', component: Login },
  { path: '/chat', component: Chat },
  { path: '/registering', component: Register },
  {path:'/',redirect:'/login'}
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;