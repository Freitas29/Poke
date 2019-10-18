import VueRouter from 'vue-router'
import Vue from 'vue'
import Hello from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
    { path: "/", component: Hello }
]

  
export default new VueRouter({
    routes
})
  