import store from "@/store"
import storageHelper from "@/helpers/storageHelper";
export default {
    async loadMenusList(){
        await store.dispatch("LOAD_MENU_LIST");
        return store.getters.GET_MENU_LIST;
    },
    async loadRestaurantsList(){
        await store.dispatch("LOAD_RESTAURANTS_LIST");
        return store.getters.GET_RESTAURANTS_LIST;
    },
    async loadSingleRestaurant(payload){
        await store.dispatch("LOAD_SINGLE_RESTAURANTS",payload);
        return store.getters.GET_SINGLE_RESTAURANTS;
    },
    generateCoordinates(restaurants){
        const coordinates = storageHelper.getItem("location");
        if(coordinates != null){
            const {longitude,latitude} = coordinates;
            for(let i=0;i<restaurants.length;i++){
                restaurants[i].coordinates["longitude"] = longitude.toString().slice(0,-4) + Math.floor(Math.random() * 9999);
                restaurants[i].coordinates["latitude"] = latitude.toString().slice(0,-4) + Math.floor(Math.random() * 9999);
        }
        return restaurants;
    }
}
}