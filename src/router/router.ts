import { createMemoryHistory, createRouter } from 'vue-router'
import Webpage from '@/components/Webpage.vue';
import Chat from '@/components/Chat.vue';
import Login from '@/Pages/Login/Login.vue';
const routes = [
  { path: '/', component: Chat },
<<<<<<< HEAD
  {path:'/about', component:Webpage}
=======
  { path: '/about', component: Login }
>>>>>>> remotes/origin/xhf
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;