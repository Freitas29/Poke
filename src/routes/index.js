import VueRouter from 'vue-router'
import Vue from 'vue'
import Main from '../pages/Main.vue'

Vue.use(VueRouter)

const routes = [
    { path: "/", component: Main }
]

  
export default new VueRouter({
    routes
})
  