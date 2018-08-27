<template>
	<div id="register" class="row">
		<div class="col-md-12">
			<div class="panel">
				<div class="panel-body">
					<img class="center-block" src="../assets/icon.png" alt="">
					<form @submit.prevent = "onSubmit">
						<div class="form-group">
							<label for="email">电子邮箱</label>
							<input type="email" class="form-control" id="email" placeholder="请输入电子邮件" v-model="email">
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="password" class="form-control" id="password" placeholder="请输入密码" v-model="password">
						</div>
						<div class="form-group">
							<label for="confirmPassword">再次输入密码</label>
							<input type="password" class="form-control" id="confirmPassword" placeholder="请再次输入密码" v-model="confirmPassword">
						</div>
                        <button type="submit" class="btn btn-success btn-block btn-lg">注册</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
 	export default{
		data(){
			return{
				email:"",
				password:"",
				confirmPassword:""
			}
		},
		methods:{
			onSubmit(){
				if(this.password == this.confirmPassword){
					var userData = {
						email:this.email,
						password:this.password
					};
					// console.log(userData);
					axios.post('/users.json',userData).then(res => {
						console.log(res.data);
					})
				}else{
					alert("两次输入的密码不一致！");
				}
			}
		}
	}
</script>