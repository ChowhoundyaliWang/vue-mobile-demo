// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 这里可以省略 node_modules 这一层目录
import 'mint-ui/lib/style.css'

// 按需引入mint-ui部分组件（推荐使用方式）
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
// 使用 Vue.component 注册
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

// 引入 mui 的样式表 （mui是和bootstrap类似的代码片，mint-ui只能用于vue项目）
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
