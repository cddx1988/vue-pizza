import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../components/Admin.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Meau from '../components/Meau.vue'
import About from '../components/about/about.vue'
import contact from '../components/about/contact.vue'
import delivery from '../components/about/delivery.vue'
import history from '../components/about/history.vue'
import orderGuide from '../components/about/orderGuide.vue'
import personName from  '../components/about/contact/personName.vue'
import personPhone from  '../components/about/contact/personPhone.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {path:'/home',components:{
    	default:Home,
    	orderGuide,
    	history,
    	delivery
    }},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/meau',component:Meau},
    {path:'/admin',component:Admin},
    {path:'/about',component:About,children:[
      {path:'contact',component:contact,children:[
        {path:'personName',component:personName},
        {path:'personPhone',component:personPhone}
      ]},
      {path:'delivery',component:delivery},
      {path:'history',component:history},
      {path:'orderGuide',component:orderGuide},
    ]},
    {path:'*',redirect:'/home'}
  ]
});

/*router.beforeEach((to,from,next) => {
	// console.log(to);
	if(to.path == '/login' || to.path == '/register'){
		next();
	}else{
		alert("请先登录！");
		next('/login');
	}
	
})*/

export default router;


