import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from "../pages/home"
import categoryComponent from "../pages/category"
import newsInfoComponent from "../pages/newsInfo"
import shopCarComponent from "../pages/shopCar"
import userComponent from "../pages/user"

Vue.use(Router)

export default new Router({
  routes: [
   {path:"/",redirect:"/home"},
   {path:"/home",component: homeComponent},
   {path:"/category",component: categoryComponent},
   {path:"/newsInfo",component: newsInfoComponent},
   {path:"/shopCar",component:shopCarComponent},
   {path:"/user",component: userComponent},
  ]
})
