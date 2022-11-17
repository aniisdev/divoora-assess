<template>
      <div class="dashboard-location-bg">
        <div class="dashboard-location-wrapper" id="map"></div>
        <div v-if="!fields.showMap"  class="dashboard-location-container">
            <div class="dashboard-location-container-header">
                <h1>Select Your Delivery Address</h1>
                <div class="w-full h-12 bg-red-500 mt-5 rounded-lg full-center cursor-pointer"  @click="getUserLocation">
                    <v-icon  name="co-location-pin" class="mr-4" color="#fff"/>
                    <h2 class="text-md text-white font-medium">Auto Detect Location</h2>
                </div>

            </div>
        </div>
        
       </div> 
   
</template>
<script>
import {onMounted,reactive,toRaw,defineEmits} from "vue";
import locationService from "../../../services/locationService";
import restaurantService from "../../../services/restaurantService";
import mapxBox from "mapbox-gl";
import storageHelper from "@/helpers/storageHelper";
 export default{
    setup(props,{emit}){
        let map;
        const fields = reactive({
            search:'',
            showMap:false,
            restaurantList:[],
        })
        const storedAddress = storageHelper.getItem("location");
        onMounted(async()=>{
           mapxBox.accessToken = process.env.VUE_APP_MAP_BOX_TOKEN;
           map = new mapxBox.Map({
                    container: 'map', // container ID
                    style: 'mapbox://styles/mapbox/light-v10', // style URL
                    center: [8.935752,46.009830], // starting position [lng, lat]
                    zoom: 9 // starting zoom
            });
            map.addControl(new mapxBox.NavigationControl());
            if(storedAddress != null){
                fields.showMap = true;
                map.flyTo({
                    center:[storedAddress.longitude,storedAddress.latitude],
                    zoom:14
                });
                await generateCoordinates();
                emit("updateUserLocationNav",{
                    restaurants:fields.restaurantList,
                    address:storedAddress,
                });
                const marker = new mapxBox.Marker( {offset: [0, -50/2]}).setLngLat([storedAddress.longitude,storedAddress.latitude]).addTo(map); 
            }   
        });
        const searchAddress = ()=>{
            locationService.getGeoLocation(fields.search);
        }
        const generateCoordinates = async()=>{
            fields.restaurantList = await restaurantService.loadRestaurantsList();
            const reGeneratedRetaurants = restaurantService.generateCoordinates(toRaw(fields.restaurantList));
            locationService.addRestaurantsMarker(fields.restaurantList,map,mapxBox);
        }
        //get user location
        const getUserLocation = async()=> {
            if(storedAddress == null){
                const requestLocation = await locationService.getUserLocation();
                const location = toRaw(requestLocation);
                fields.search = location.address;
                locationService.storeUserLocation(location);
                setTimeout(()=>{
                    fields.showMap = true;
                map.flyTo({
                    center:[location.longitude,location.latitude],
                    zoom:15
                });
            },1500);
            await generateCoordinates();
            emit("updateUserLocationNav",{
                    restaurants:fields.restaurantList,
                    address:location,
            });
            const marker = new mapxBox.Marker( {offset: [0, -50/2]}).setLngLat([location.longitude,location.latitude]).addTo(map); 
            }

        };
        return {
            fields,searchAddress,getUserLocation,generateCoordinates
        }
    }
 }
</script>
<style lang="scss">
.mapboxgl-marker-REMOVETHIS {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border:1px solid gray;
    background-color:yellow;
}
.dashboard-location-container{
    width: 550px;
    left: 50%;
    box-shadow: rgba(#e9ecef, 1) 0px 0px 16px;
    top: 45%;
    border-radius: 35px;
    transform: translate(-50%,-45%);
    background-color: white;
    position: absolute;
    z-index: 11;
    &-header{
        padding: 34px;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
    }
}
.dashboard-location-bg{
    height: 500px;
    border-radius: 35px;
    z-index:10;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: saturate(.4) blur(3px) !important;
    left: 0;
    top: 0;
    width: 100%;
    position: relative;
}
.dashboard-location-wrapper{
    height:100%;
    z-index: 5;
    left: 0;
    overflow: hidden;
    top: 0;
    width: 100%;
    border-radius: 35px;
}
</style>