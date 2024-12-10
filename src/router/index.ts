import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import InicioView from '@/views/InicioView.vue'
import NoticiasView from '@/views/NoticiasView.vue'
import ContactoView from '@/views/ContactoView.vue'
import NintendoView from '@/views/NintendoView.vue'
import PlayStation5view from '@/views/PlayStation5view.vue'
import XboxView from '@/views/XboxView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: NoticiasView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path: '/nintendo',
    name: 'nintendo',
    component: NintendoView
  },
  {
    path: '/playstation',
    name: 'playstation',
    component: PlayStation5view
  },
  {
    path: '/xbox',
    name: 'xbox',
    component: XboxView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
