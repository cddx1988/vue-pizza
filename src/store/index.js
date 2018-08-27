import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		menuItems:{},
		currentUser:null,
        isLogin:false
	},
	getters:{
		getMenuItems:state => state.menuItems,
		currentUser:state => state.currentUser,
		isLogin:state => state.isLogin
	},
	mutations:{
		setMenuItems(state,data){
			state.menuItems = data;
		},
		removeMenuItem(state,data){
			state.menuItems.forEach((item,index) => {
				if(item == data){
					state.menuItems.splice(index,1);
				}
			})
		},
		addToMenuItems(state,data){
			state.menuItems.push(data)
		},
		userStates(states,user){
			if(user){
				states.currentUser = user;
				states.isLogin = true;
			}else{
				states.currentUser = null;
				states.isLogin = false;
			}
		}
	},
	actions:{
		setUser({commit},user){
			commit("userStates",user)
		}
	}
})