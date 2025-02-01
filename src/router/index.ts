import {createRouter, createWebHistory} from 'vue-router'
import Default from "../layouts/Default.vue";
import Home from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Default,
            children: [
                {
                    path: '',
                    component: Home
                }
            ]
        }
    ]
})

export default router