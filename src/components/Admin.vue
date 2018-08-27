<template>
	<div class="row">
		<div class="col-md-8 col-sm-12">
			<newPizza></newPizza>
		</div>
		<div class="col-md-4 col-sm-12">
			<h3 class="my-3 text-muted">菜单</h3>
			<table class="table">
				<thead>
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody class="my-3" v-for="(item,index) in getMenuItems">
					<td>{{item.name}}</td>
					<td>
						<button class="btn btn-danger" @click="deleteMenu(item)">&times;</button>
					</td>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
    import newPizza from './newPizza.vue'
	export default{
		data(){
			return {
				msg:"Admin"			
			}
		},
		components:{
			newPizza
		},
		computed:{
			getMenuItems(){
				// return this.$store.state.menuItems;
				return this.$store.getters.getMenuItems;
			}
		},
		created(){
			this.$http.get("menu-lee.json").then(res => {
				let data = res.data;
				let menuArray = [];
				for(let key in data){
					data[key].id = key;
					menuArray.push(data[key]);
				}
				// this.getMenuItems = menuArray;
				this.$store.commit("setMenuItems",menuArray)
			})
		},
		methods:{
			deleteMenu(item){
				fetch("https://wd9077913423avyuea.wilddogio.com/menu-lee/"+item.id+"/.json",{
					method:"DELETE",
					headers:{
						'Content-type':'application/json'
					}
				})
				.then(res => {res.json()})
                // .then(data => {this.$router.push({path:"/meau"})})
                .then(data => this.$store.commit("removeMenuItem",item))
                .catch(err => {console.log(err)})
			}
		}
	}
</script>
<style>
	.my-3{
		margin-top: 3rem;
		margin-bottom: 3rem;
	}
</style>