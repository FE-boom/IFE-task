import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import login from '../components/login.vue'
import newsContent from '../components/newsContent.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/newsContent:id',
            component: newsContent
        },
        {
            path: '/',
            component: home
        },
        {
            path: '*',
            component: home
        }
    ]
})
