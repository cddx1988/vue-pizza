<template>
	<div>
		<form>
			<h3 class="text-muted my-3">添加新的pizza</h3>
			<div class="form-group row">
				<label class="col-sm-1">品种</label>
				<div class="col-sm-11">
					<input class="form-control" type="text" v-model="newPizza.name">
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-1">描述</label>
				<div class="col-sm-11">
					<input class="form-control" type="text" v-model="newPizza.description">
				</div>
			</div>
			<p><strong>选项1</strong></p>
			<div class="form-group row">
				<label class="col-sm-1">尺寸</label>
				<div class="col-sm-11">
					<input class="form-control" type="text" v-model="newPizza.size1">
				</div>
			</div>	
			<div class="form-group row">
				<label class="col-sm-1">价格</label>
				<div class="col-sm-11">
					<input class="form-control" type="text" v-model="newPizza.price1">
				</div>
			</div>
			<p><strong>选项2</strong></p>
				<div class="form-group row">
				<label class="col-sm-1">尺寸</label>
				<div class="col-sm-11">
					<input class="form-control" type="text" v-model="newPizza.size2">
				</div>
			</div>	
			<div class="form-group row">
				<label class="col-sm-1">价格</label>
				<div class="col-sm-11">
					<input class="form-control" type="text" v-model="newPizza.price2">
				</div>
			</div>
			<button type="button" class="btn btn-primary btn-block" @click="submitPizza">提交</button>
		</form>
	</div>
</template>

<script>
	export default{
         data(){
         	return{
         		newPizza:{}
         	}
         },
         methods:{
         	submitPizza(){
         		let data = {
         			name:this.newPizza.name,
         			description:this.newPizza.description,
         			options:[
                      {
                      	size:this.newPizza.size1,
                      	price:this.newPizza.price1
                      },{
                      	size:this.newPizza.size2,
                      	price:this.newPizza.price2
                      }
         			]
         		};
         		// this.$http.post("menu-lee.json",data).then(res => {
         		// 	this.$router.push({path:"/meau"});
         		// })


         		this.$http.post("menu-lee.json",data).then(res => {
         			this.$store.commit("addToMenuItems",data)
         		})
         	}
         }
	}
</script>

<style scope>
	label{
		font-size: 17px;
		font-weight: normal;
	}
</style>