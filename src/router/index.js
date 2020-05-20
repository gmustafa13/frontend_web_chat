import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import Signup from '../views/signup.vue';
import imagePage from "../views/landingPage.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "Login",
    component: login
  },
  {
    path: "/signup",
    name: "SignUp",
    component: Signup
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/signup.vue")
  },
  {
    path: "/landing",
    name: "Landing",
    component: imagePage
  }
];

const router = new VueRouter({
  routes
});

export default router;