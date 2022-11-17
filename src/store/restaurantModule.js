import axios from "axios";

export default {
    state:{
        menusList:[],
        restaurantsList:[],
        singleRestaurant:{},
    },
    actions:{
        //for passing the full path of the back-end api i can setup the default axios basUrl
        LOAD_MENU_LIST({commit},payload){
            return new Promise((resolve,reject)=>{
                axios.get(`${process.env.VUE_APP_API}/api/menus/list`).then((response)=>{
                    resolve(response);
                    commit("FILL_MENU_LIST",response.data);
                }).catch((error)=>{
                    reject(error);
                })
            });
        },
        LOAD_RESTAURANTS_LIST({commit},payload){
            return new Promise((resolve,reject)=>{
                axios.get(`${process.env.VUE_APP_API}/api/restaurants/list`).then((response)=>{
                    resolve(response);
                    commit('FILL_RESTAURANTS_LIST',response.data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        },
        LOAD_SINGLE_RESTAURANTS({commit},payload){
            return new Promise((resolve,reject)=>{
                axios.get(`${process.env.VUE_APP_API}/api/restaurants/single/${payload.id}`).then((response)=>{
                    resolve(response);
                    commit('FILL_SIGNLE_RESTAURANTS_LIST',response.data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        }
    },
    mutations:{
        FILL_SIGNLE_RESTAURANTS_LIST(state,payload){
            return state.singleRestaurant = payload;
        },
        FILL_RESTAURANTS_LIST(state,payload){
            return state.restaurantsList = payload;
        },
        FILL_MENU_LIST(state,payload){
            return state.menusList = payload;
        }
    },
    getters:{
        GET_MENU_LIST(state){
            return state.menusList;
        },
        GET_RESTAURANTS_LIST(state){
            return state.restaurantsList;
        },
        GET_SINGLE_RESTAURANTS(state){
            return state.singleRestaurant;
        }
    }
}