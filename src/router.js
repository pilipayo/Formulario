import Vue from 'vue'
import VueRouter from 'vue-router'


import Formulario from './componentes/Formulario.vue'
import HttpDatos from './componentes/HttpDatos'

Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes : [
        {path: '/', redirect : '/formulario'},
        { path: '/formulario', component: Formulario },
        { path: '/httpDatos', component: HttpDatos }
    ]
})