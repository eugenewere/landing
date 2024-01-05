import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
// add this
import './index.css'
import Home from "@/pages/Home.vue";
import TermsAndConditions from "@/pages/TermsAndConditions.vue";

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
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
