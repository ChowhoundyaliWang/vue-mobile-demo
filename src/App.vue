<template>
    <div class='app-container'>
        <!-- 顶部 header 区域 -->
        <mt-header fixed title='好好学习鸭梨要发财'></mt-header>

        <!-- 中间内容区域 -->
		<transition name='fade'>
	        <router-view></router-view>	
		</transition>

        <!-- 底部 tabs 区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>


<script>
export default {
    name: 'App',
    data(){
        return {
        }
    },
    methods: { 
    }
}
</script>

<style lang="scss" scoped>
// #app {  全局的样式
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
.app-container{
    padding-top: 40px;
	overflow-x: hidden;  // 配合动画
}
.fade-enter-active, .fade-leave-active {
	transition: all 0.5s ease;
}
.fade-enter{  // 进入
	opacity: 0;
	transform: translateX(100%)
} 
.fade-leave-to{ // 离开
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;  // 重点： 解决组件切换时，上下的问题
}
</style>
