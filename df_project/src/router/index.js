import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import indexNav from '@/view/indexNav'
import list from '@/view/list'
import creat_list from '@/view/creat_list'
import choose_class from '@/view/choose_class'
import work_details from '@/view/work_details'
import alert_creat_list from '@/view/alert_creat_list'
import foundation_class from '@/view/foundation_class'
import network_class from '@/view/network_class'
import device_class from '@/view/device_class'
import foundation_setting from '@/view/foundation_setting'
import creat_class from '@/view/creat_class'
import account from '@/view/account'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/nav',
      name: 'indexnav',
      component: indexNav
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
	{
      path: '/creat_list',
      name: 'creat_list',
      component: creat_list
    },
	{
      path: '/choose_class',
      name: 'choose_class',
      component: choose_class
    },
	{
      path: '/work_details',
      name: 'work_details',
      component: work_details
    },
	{
      path: '/alert_creat_list',
      name: 'alert_creat_list',
      component: alert_creat_list
    },
	{
      path: '/foundation_class',
      name: 'foundation_class',
      component: foundation_class
    },
	{
      path: '/network_class',
      name: 'network_class',
      component: network_class
    },
	{
      path: '/device_class',
      name: 'device_class',
      component: device_class
    },
	{
      path: '/foundation_setting',
      name: 'foundation_setting',
      component: foundation_setting
    },
	{
      path: '/creat_class',
      name: 'creat_class',
      component: creat_class
    },

    {
      path: '/account',
      name: 'account',
      component: account
    },
  ]
})
