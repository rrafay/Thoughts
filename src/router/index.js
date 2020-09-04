import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import * as firebase from "firebase/app"
import "firebase/auth"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts,
    meta: {requiresAuth:true}
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

 router.beforeEach((to, from, next) =>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next('/login')
  }
  else{
    next ()
  }
 })

export default router
