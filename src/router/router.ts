import { createMemoryHistory, createRouter } from 'vue-router'
import Chat from '@/components/Chat.vue';
const routes = [
  { path: '/', component: Chat },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;