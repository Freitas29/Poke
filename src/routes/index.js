import VueRouter from 'vue-router'
import Vue from 'vue'
import Main from '../pages/Main.vue'
import Details from '../pages/Details.vue'

Vue.use(VueRouter)

const routes = [
    { path: "/", name: "main", component: Main },
    { path: "/pokemon/:id", name: "details", component: Details }
]

  
export default new VueRouter({
    routes
})
  