<template>
	<div id="about">
		<div class="row">
			<div class="col-md-4 list-group list-unstyled">
				<router-link to="/about/contact" tag="li">
					<a class="list-group-item">联系我们</a>
				</router-link>
				<router-link to="/about/delivery" tag="li">
					<a class="list-group-item">快递信息</a>
				</router-link>
				<router-link to="/about/history" tag="li">
					<a class="list-group-item">历史订单</a>
				</router-link>
				<router-link to="/about/orderGuide" tag="li">
					<a class="list-group-item">点餐文档</a>
				</router-link>
			</div>
			<div class="col-md-8">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>