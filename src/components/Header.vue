<template>
	<header>
		<nav class="navbar navbar-default">
			<a href="#" class="navbar-brand">点餐系统</a>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li><router-link to="/home" active-class="mainActive">主页</router-link></li>
					<li><router-link to="/meau" active-class="mainActive">菜单</router-link></li>
					<li><router-link to="/admin" active-class="mainActive">管理</router-link></li>
					<li><router-link to="/about" active-class="mainActive">关于我们</router-link></li>
		        </ul>
		        <ul class="nav navbar-nav navbar-right">
		        	<li>
		        		<li v-show="!isLogin"><router-link to="/login">登录</router-link></li>
                         <li v-show="isLogin"><a>{{currentUser}}</a></li>
                         <li v-show="isLogin"><router-link to="/login">退出</router-link></li>
		        		<li v-show="!isLogin"><router-link to="/register">注册</router-link></li>
		        	</li>
		        </ul>
			</div>
		</nav>
	</header>
</template>
<style>
	.mainActive{
	color: #555;
    background-color: #e7e7e7;
	}
</style>
<script>
	export default{
		computed:{
			currentUser(){
				return this.$store.getters.currentUser
			},
			isLogin(){
				return this.$store.getters.isLogin
			}
		}
	}
</script>