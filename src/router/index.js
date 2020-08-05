import Vue from "vue";
import VueRouter from "vue-router";


import Store from "../components/Store";
import ShoppingCart from "../compoennets/ShoppingCart";

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes:[
        {path:"/", componen:Store},
        {path:"/cart", component:ShoppingCart},
        {path:"*", redirect:"/"}
    ]
})