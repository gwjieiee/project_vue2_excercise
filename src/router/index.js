import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(VueRouter)

const routes = [
  {
		//首页
    path: '/',
    name: 'home',
    component: HelloWorld,
		children:[{
			path:'',
			name:'home',
			component: () => import('@/views/homePage/homePage')
		}]
  },
	{
		//登录
		path:'/login',
		component: () => import('@/views/login/login.vue')
	},
	{
		//空间1
		path:'/spaceOne',
		component:HelloWorld,
		children:[
			{
				path:'',
				component: () => import('@/views/workspace/spaceOne')
			}
		]
	},
	{
		//空间2
		path:'/spaceTwo',
		component:HelloWorld,
		children:[
			{
				path:'',
				component: () => import('@/views/workspace/spaceTwo')
			}
		]
	},
	{
		//空间3
		path:'/spaceThree',
		component:HelloWorld,
		children:[
			{
				path:'',
				component: () => import('@/views/workspace/spaceThree')
			}
		]
	},
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
