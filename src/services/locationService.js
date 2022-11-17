import axios from "axios";
import store from "@/store";
import mapboxGl from "mapbox-gl";
export default {
    state:{
        addressDetails:{},
    },
    initMap(mapId){
        mapboxGl.accessToken = process.env.VUE_APP_MAP_BOX_TOKEN;
        const map = new mapboxGl({
            container:mapId,
        });
        return map;
    },
    async getGeoLocation(){
        const request =  await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/test.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${process.env.VUE_APP_MAP_BOX_TOKEN}`);
    },
     async getUserLocation(){
        await store.dispatch("GET_USER_COORDINATES");
        return store.getters.GET_USER_COORDINATES;
    },
    checkGeoService(){
        return window.navigator.geolocation;
    },
    storeUserLocation(location){
        window.localStorage.setItem("location",JSON.stringify(location));
    },
    loadUserLocation(){
        const location = window.localStorage.getItem("location");
        return location ? JSON.parse(location) : -1;
    },
     getAddressByCoordinates(coordinates){
         store.dispatch("GET_ADDRESS_FROM_COORDINATES",coordinates);
        return store.getters.GET_ADDRESS;
    },
    addRestaurantsMarker(restaurants,map,mapxBox){
        const geojson = {
            'type': 'FeatureCollection',
            'features':[],
        }
        for(let i = 0;i<restaurants.length;i++){
            const {longitude,latitude} =  restaurants[i].coordinates;
            geojson.features.push({
                'type': 'Feature',
                        'properties': {
                        'message': 'Foo',
                        'iconSize': [40, 40],
                        'url': restaurants[i].image.image,
                },
                        'geometry': {
                        'type': 'Point',
                        'coordinates': [restaurants[i].coordinates.longitude, restaurants[i].coordinates.latitude]
                }
            },);
        }
        for(const marker of geojson.features){
            setTimeout(()=>{
                const el = document.createElement('div');
                const width = marker.properties.iconSize[0];
                const height = marker.properties.iconSize[1];
                el.className = 'marker';
                el.style.backgroundImage = `url(${marker.properties.url})`;
                el.style.width = `${width}px`;
                el.style.height = `${height}px`;
                el.style.backgroundSize = 'cover';
                el.style.backgroundRepeat = "no-repeat";
                el.style.borderRadius="30px";
                el.style.border = "2px solid #E20613";
               new mapxBox.Marker(el,{offset: [0, -50/2]}).setLngLat(marker.geometry.coordinates).addTo(map); 
                },1000);
        }
    }
    
}