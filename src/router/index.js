import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import SignUpComponent from "../public/pages/sign-up.component.vue";
import SignUpAuditorComponent from "../public/pages/sign-up-auditor.component.vue";
import SignUpOwnerComponent from "../public/pages/sign-up-owner.component.vue";
import LogInComponent from "../public/pages/log-in.component.vue";

const routes=[
    {
        name:'Home',
        component:HomeComponent,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUpComponent,
        path:'/sign-up'
    },
    {
        name:'SignUpAuditor',
        component:SignUpAuditorComponent,
        path:'/sign-up-auditor'
    },
    {
        name:'SignUpOwner',
        component:SignUpOwnerComponent,
        path:'/sign-up-owner'
    },
    {
        name:'Login',
        component:LogInComponent,
        path:'/login'
    }
]

const router = createRouter({

    history: createWebHistory(),
    routes,
});

export default router;