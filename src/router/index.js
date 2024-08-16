import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/HomePage.vue'
import About from '../Views/AboutUsPage.vue'
import ContactPage from "../Views/ContactPage.vue";
import CourseAndCharge from "../Views/CourseAndChargePage.vue";

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/about',
    name: 'aboutUs',
    component: About
  },
  {
    path: '/contact',
    name: 'contactUs',
    component: ContactPage
  },
  {
    path: '/course-and-charge',
    name: 'course-and-charge',
    component: CourseAndCharge
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router