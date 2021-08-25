import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    //mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/Lander')},
        {path:'/about',  name:'Landing', component: () =>import('./components/Lander')},
        {path:'/experience',  name:'Landing', component: () =>import('./components/Lander')},
        {path:'/work',  name:'Landing', component: () =>import('./components/Lander')},
        {path:'/contact',  name:'Landing', component: () =>import('./components/Lander')},
    ]
});

export default router;
