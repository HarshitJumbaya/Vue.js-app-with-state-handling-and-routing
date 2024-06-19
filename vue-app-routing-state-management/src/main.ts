import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

// import router from './router'

const routes = [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/about', component: () => import('./views/About.vue') },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });


createApp(App).use(router).mount('#app')
