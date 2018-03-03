import Vue from 'vue'
import Router from 'vue-router';
import axios from 'axios';
import { HOST } from '../const/api';
import usermanage from '@/containers/usermanage/usermanage'
import editmember from '@/containers/edit-member/edit-member'
import login from '@/containers/login/login'
import container from '@/containers/container/container'
import role from '@/containers/role/role'
import resource from '@/containers/resource/resource'
import resourceList from '@/containers/resource-list/resource-list'
import editrole from '@/containers/role/editrole/editrole'
import organization from '@/containers/organization/organization'
import dataAnalyze from '@/containers/data-analyze/data-analyze'
import monthSales from '@/containers/data-analyze/month-sales/month-sales'
import saleDistribution from '@/containers/data-analyze/sale-distribution/sale-distribution'
import saleRate from '@/containers/data-analyze/sale-rate/sale-rate'
import yearGrow from '@/containers/data-analyze/year-grow/year-grow'
import panel from '@/containers/panel/panel'
import auth from '@/containers/role/auth/auth'
import editOrganization from '@/containers/edit-organization/edit-organization'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path:"/login",
      name:"login",
      component:login
    },

    {
      path:'/',
      name:"container",
      component:container,
      children:[
        {
          path:'/index',
          name:'panel',
          component:panel
        },
        {
          path: '/sys/resource',
          name: 'resource',
          component: resource,
          children:[
            {
              path:"/sys/resource/list",
              name:"resource-list",
              component:resourceList
            }
          ]
        },
        {
          path: '/sys/role',
          name: 'role',
          component: role
        },
        {
          path: '/sys/role/edit-role',
          name: 'editrole',
          component: editrole
        },
        {
          path: '/sys/role/auth',
          name: 'auth',
          component: auth
        },
        {
          path: '/sys/user',
          name: 'usermanage',
          component: usermanage
        },
        {
          path: '/sys/organization',
          name: 'usermanage',
          component: organization
        },
        {
          path: '/sys/edit-organization',
          name: 'editOrganization',
          component: editOrganization
        },
        {
          path: '/sys/user/editmember',
          name: 'editmember',
          component: editmember
        },
        {
          path: '/sys/user/checkmember',
          name: 'editmember',
          component: editmember
        },
        {
          path: '/sys/user/addmember',
          name: 'editmember',
          component: editmember
        },

        {
          path: '/dataAnalyze/month-sales',
          name:'month-sales',
          component:monthSales
        },
        {
          path: '/dataAnalyze/year-grow',
          name:'year-grow',
          component:yearGrow
        },
        {
          path: '/dataAnalyze/sale-distribution',
          name:'sale-distribution',
          component:saleDistribution
        },
        {
          path: '/dataAnalyze/sale-rate',
          name:'sale-rate',
          component:saleRate
        }


      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  /*  document.title = to.meta.title || 'demo'
    if (!to.query.url && from.query.url) {
      to.query.url = from.query.url
    }*/
  sessionStorage.setItem('currentPath',to.fullPath);
  if(from.fullPath === '/login'){
    sessionStorage.setItem('lastPath','/index');
  }else{
    sessionStorage.setItem('lastPath',from.fullPath);
  }

  next()
})

export default router