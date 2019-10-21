import VueRouter from 'vue-router'
import Vue from 'vue'
import Main from '../pages/Main.vue'
import Details from '../pages/Details.vue'

Vue.use(VueRouter)

const routes = [
    { path: "/", component: Main },
    { path: "/pokemon/:id", component: Details }
]

  
export default new VueRouter({
    routes
})
  