import axios from "axios";
import {toRaw} from "vue"
export default {
    state:{
        addressDetails:{},
        address:null,
    },
    actions:{
        GET_ADDRESS_FROM_COORDINATES({commit},payload){
            return new Promise((resolve,reject)=>{
                axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${payload.longitude},${payload.latitude}.json?access_token=${process.env.VUE_APP_MAP_BOX_TOKEN}`).then((response)=>{   
                resolve(response);
                    commit('SET_ADDRESS',{
                        address:response.data.features[0].place_name,
                    });
                }).catch((error)=>{
                    reject(error);
                })
            })
        },
        GET_USER_COORDINATES({commit,dispatch},payload){
            return new Promise((resolve,reject)=>{
                window.navigator.geolocation.getCurrentPosition((position)=>{
                    const {longitude,latitude} = position.coords;
                    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.VUE_APP_MAP_BOX_TOKEN}`).then((response)=>{
                        resolve(response);
                        commit('SET_USER_ADDRESS',{
                            address:response.data.features[0].place_name,
                            longitude,
                            latitude
                        });
                    }).catch((error)=>{
                        reject(error);
                    })
                },(error)=>reject(error));
            });
        },
    },
    mutations:{
        SET_ADDRESS(state,payload){
            return state.address = payload.address;
        },
        SET_USER_ADDRESS(state,payload){
            return state.addressDetails = payload;
        }
    },
    getters:{
        GET_USER_COORDINATES(state){
            return state.addressDetails;
        },
        GET_ADDRESS(state){
            return state.address;
        }
    },
}