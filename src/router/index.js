import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../audit/pages/home.component.vue";
import SignUpComponent from "../public/pages/sign-up.component.vue";
import SignUpAuditorComponent from "../public/pages/sign-up-auditor.component.vue";
import SignUpOwnerComponent from "../public/pages/sign-up-owner.component.vue";
import LogInComponent from "../public/pages/log-in.component.vue";
import MessagesComponent from "../audit/pages/messages.component.vue";
import RequestsComponent from "../audit/pages/requests.component.vue";
import PremiumComponent from "../audit/pages/premium.component.vue";

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
    },
    {
        name:'Messages',
        component:MessagesComponent,
        path:'/messages'
    },
    {
        name:'Requests',
        component:RequestsComponent,
        path:'/requests'
    },
    {
        name:'Premium',
        component:PremiumComponent,
        path:'/premium'
    }
]

const router = createRouter({

    history: createWebHistory(),
    routes,
});

export default router;