import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Tab from 'components/tab/tab'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    }
  ]
})
