import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import IndexProject from './pages/IndexProject.vue';
import SingleProject from './pages/SingleProject.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },
        {
            path: '/projects',
            name: 'projects',
            component: IndexProject
        },
        {
            path: '/projects/:id',
            name: 'project',
            component: SingleProject
        },
    ]
});

export { router };
