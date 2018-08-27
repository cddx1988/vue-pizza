<template>
	<div class="row">
		<div class="col-md-8 col-sm-12">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>尺寸</th>
						<th>价格</th>
						<th>加入</th>
					</tr>
				</thead>
				<tbody v-for="(item,index) in getMenuItems">
					<tr>
						<td><strong>{{item.name}}</strong></td>
					</tr>
					<tr v-for="(option,index) in item.options">
						<td>{{option.size}}</td>
						<td>{{option.price}}</td>
						<td><button class="btn btn-sm btn-success" @click="addToBasket(item,option)">+</button></td>
					</tr>
				</tbody>
			</table>
	    </div>
	    <div class="col-md-4 col-sm-12">
	    	<div v-if="baskets.length != 0">
	    		 <table class="table">
	    				    		<thead class="thead-default">
	    				    			<tr>
	    				    				<th>数量</th>
	    				    				<th>品种</th>
	    				    				<th>价格</th>
	    				    			</tr>
	    				    		</thead>
	    				    		<tbody>
	    				    			<tr v-for="(item,index) in baskets">
	    				    				<td>
	    				    					<button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
	    				    					<span>{{item.quantity}}</span>
	    				    					<button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
	    				    				</td>
	    				    				<td>{{item.name}}{{item.size}}</td>
	    				    				<td>{{item.price}}</td>
	    				    			</tr>
	    				    		</tbody>
	    				    	</table> 
		    	<p>总价：{{totalPrice}}</p>
		    	<button class="btn btn-success btn-block">提交</button>
	    	</div>
	    	<div v-else>还没有商品！</div>
	    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
        baskets:[]
			}
		},
		computed:{
			totalPrice(){
				let total = 0;
				for(let index in this.baskets){
                    let basket = this.baskets[index];
                    total += basket.price * basket.quantity;
				}
				return total;
			},
      getMenuItems(){
        // return this.$store.state.menuItems;
        return this.$store.getters.getMenuItems;
      }
		},
        methods:{
        	addToBasket(item,option){
        		let basket = {
                   name:item.name,
                   size:option.size,
                   price:option.price,
                   quantity:1
        			}

        		if(this.baskets.length != 0){
        			let result = this.baskets.filter( (basket) => {
        				return (basket.name === item.name && basket.size === option.size);
        			} );
        			// console.log(result);
        			if(result.length > 0){
        				result[0].quantity ++;
        			}else{
        				this.baskets.push(basket);
        			}
        		}else{
        			this.baskets.push(basket);
        		}
        	},
        	decreaseQuantity(item){
        		item.quantity --;
        		if(item.quantity <= 0){
        			this.baskets.splice(this.baskets.indexOf(item),1);
        		}
        		// console.log(item);
        	},
        	increaseQuantity(item){
        		item.quantity ++;
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
          this.$store.commit("setMenuItems",menuArray);
      })
        }
	}
</script>