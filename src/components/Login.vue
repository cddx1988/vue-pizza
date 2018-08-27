<template>
	<div id="Login" class="row">
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
                        <button type="submit" class="btn btn-success btn-block btn-lg">登录</button>
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
				password:""
			}
		},
		methods:{
			onSubmit(){
				axios.get('/users.json').then(res => {
					// console.log(res.data);
					const data = res.data;
					var users = [];
					for(var key in data){
						users.push(data[key]);
					}
					// console.log(users);
					let result = users.filter((user) => {
						return user.email == this.email && user.password  == this.password;
					})
					// console.log(result);
					if(result != null && result.length != 0){
						// this.$router.push({path:'/home'});
						this.$store.dispatch("setUser",result[0].email)
					}

				})
			}
		}
	}
</script>