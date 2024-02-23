import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginPage.vue'
import KaryawanPage from '../views/KaryawanPage.vue'
import addKaryawanPAge from '../views/addKaryawanPage.vue'
import editKaryawanPage from '../views/editKaryawanPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/master-karyawan',
      name: 'masterKaryawan',
      component: KaryawanPage
    },
    {
      path: '/add-karyawan',
      name: 'addKaryawan',
      component: addKaryawanPAge
    },
    {
      path: '/edit-karyawan',
      name: 'editKaryawan',
      component: editKaryawanPage
    },
  ]
})

export default router
