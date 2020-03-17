//引入各个组件
//首页
import home from '../containers/Home'
//分类
import sort from '../containers/Sort'
//值得买
import goodvalue from '../containers/GoodeValue'
//购物车
import cart from '../containers/Cart'
//我的
import personal from '../containers/Personal'

const router =[
  {
    path:'/home',
    component:home,
    exact:true
  },
  {
    path:'/sort',
    component:sort,
    exact:true
  },
  {
    path:'/goodvalue',
    component:goodvalue,
    exact:true
  },
  {
    path:'/cart',
    component:cart,
    exact:true
  },
  {
    path:'/personal',
    component:personal,
    exact:true
  },
  //重定向
  {
    path:'/',
    redirect:'/home'
  },
]


export default router