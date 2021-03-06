import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import NewsList from '@/components/news/NewsList'
import ImageList from '@/components/imageshare/ImagesList'
import Newsinfo from '@/components/news/Newsinfo'
import Imageinfo from '@/components/imageshare/Imagesinfo'
import GoodsList from '@/components/goods/GoodsList'
import Goodsinfo from '@/components/goods/Goodsinfo'
import Goodsdesc from '@/components/goods/Goodsdesc'
import Goodscomment from '@/components/goods/Goodscomment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
    	path: '/home',
			name: 'HomeContainer',
      component: HomeContainer
    },
    {
    	path: '/member',
    	name: '/MemberContainer',
      component: MemberContainer
    },
    {
    	path: '/shopcar',
      name: 'ShopcarContainer',
      component: ShopcarContainer
    },
    {
    	path: '/search',
			name: 'SearchContainer',
      component: SearchContainer
    },
    {
    	path: '/home/newslist',
    	name: 'NewsList',
    	component: NewsList
    },
		{
			path: '/home/imagelist',
			name: 'ImageList',
			component: ImageList
		},
    {
      path: '/home/newsinfo/:id',
      name: 'Newsinfo',
      component: Newsinfo
    },
    {
      path: '/home/imageinfo/:id',
      name: 'Imageinfo',
      component: Imageinfo
    },
    {
      path: '/home/goodslist',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/home/goodsinfo/:id',
      name: 'Goodsinfo',
      component: Goodsinfo
    },
    {
      path: '/home/goodsdesc/:id',
      name: 'Goodsdesc',
      component: Goodsdesc
    },
    {
      path: '/home/goodscomment/:id',
      name: 'Goodscomment',
      component: Goodscomment
    }
  ],
  linkActiveClass: 'mui-active'
})
