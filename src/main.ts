import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
// add this
import './index.css'
import Home from "@/pages/Home.vue";
import TermsAndConditions from "@/pages/TermsAndConditions.vue";
import Disclaimer from '@/pages/Disclaimer.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/terms',
        component: TermsAndConditions,
        name: 'terms'
    },
    {
        path: '/disclaimer',
        component: Disclaimer,
        name: 'disclaimer'
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
