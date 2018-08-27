<template>
	<div class="panel panel-default">
		<div class="panel-heading">联系我们</div>
		<div class="panel-body">
			<h4 class="panel-title">联系我们</h4>
			<p>weseeking@163.com</p>

			<router-link to="/about/contact/personName">名字</router-link>
			<router-link to="/about/contact/personPhone">电话</router-link>

			<router-view></router-view>
		</div>
	</div>
</template>