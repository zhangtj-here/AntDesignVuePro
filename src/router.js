import Vue from "vue";
import Router from "vue-router";
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import Home from "./views/Home.vue";
import renderRouterView from "./components/renderRouterView";
import NotFound from './views/404';

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,//
  routes: [
    {
      path: "*",
      name: "404",
      component: NotFound
    },
    {
      path: '/user',
      // component: renderRouterView,
      // component: { render: h => h( 'router-view' ) },
      component: () =>
          import( /* webpackChunkName: "layout" */ "./layouts/UserLayout.vue"),
      children: [
        {
          path: '/user',
          redirect: '/user/login'
        },
        {
          path: '/user/login',
          name: "login",
          component: () =>
            import( /* webpackChunkName: "user" */ "./views/user/login.vue" )
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
              import(/* webpackChunkName: "user" */  "./views/user/register.vue" )
        }
      ]
    },
    {
      path: "/",
      component: () =>
          import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        // dashboard
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              component: () =>
                  import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis")
            }
          ]
        },
        // form
        {
          path: "/form",
          name: "form",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/form/basic-form",
              name: "basicform",
              component: () =>
                  import(/* webpackChunkName: "form" */ "./views/Forms/BasicForm")
            },
            {
              path: "/form/step-form",
              name: "stepform",
              component: () =>
                  import(/* webpackChunkName: "form" */ "./views/Forms/StepForm"),
              children: [
                {
                  path: "/form/step-form",
                  redirect: "/form/step-form/info"
                },
                {
                  path: "/form/step-form/info",
                  name: "info",
                  component: () =>
                      import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step1")
                },
                {
                  path: "/form/step-form/confirm",
                  name: "confirm",
                  component: () =>
                      import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step2")
                },
                {
                  path: "/form/step-form/result",
                  name: "result",
                  component: () =>
                      import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step3")
                }
              ]
            }
          ]
        }
      ]
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, form, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
