<template>
    <div v-if="restaurantsList.length == 0" class="full-center">
        <Loading></Loading>
    </div>
    <div class="mt-10 w-full" v-if="restaurantsList.length > 0">
        <div class="flex items-center">
            <carousel  itemsToShow="4" class="w-full" >
        <slide v-for="index in restaurantsList.length" :key="index" class="ml-2">
             <div class="single-restaurant mb-4 mt-2" @click="goToDetails(restaurantsList[index - 1].id)">
             <div class="single-restaurant-image">
                <img :src="restaurantsList[index - 1].image.image" >
            </div>
            <div class="pl-2 pr-2 pb-2">
                <div class="flex items-center justify-between mt-2">
                <h1 class="font-bold">{{restaurantsList[index -1].name}}</h1>
                <div class="flex items-center">
                    <v-icon name="hi-solid-star" color="yellow"></v-icon>
                    <h1 class="font-medium">4.5</h1>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div>
                    <div class="mt-2 flex items-center">
                    <div class="h-6 w-6 bg-red-100 rounded-full full-center">
                    <v-icon name="gi-path-distance" color="#E20613"></v-icon> 
                 </div>
                <h1 class="text-xs ml-2 font-medium">{{calculateDistance(restaurantsList[index -1].coordinates)}} kM</h1>
            </div>
                </div>
                <div class="ml-7">
                    <div class="mt-2 flex items-center">
                    <div class="h-7 w-7 bg-yellow-100 rounded-full full-center">
                    <v-icon name="md-deliverydining-sharp" color="#ffb703"></v-icon> 
                 </div>
                <h1 class="text-xs ml-2 font-medium">Free Delivery</h1>
            </div>
                </div>
            </div>
            <!--Menu Available-->
            <div class="mt-2 mb-2 overflow-hidden">
                <div class="h-4 inline bg-black text-white pb-1 pt-1 pl-4 pr-4 rounded-md main-shadow ml-3" v-for="item in restaurantsList[index -1].menus" :key="item">
                    <h1 class="text-sm inline">{{item.name}}</h1>
                </div>
            </div>
          </div>
      </div>
    </slide>
            <template  #addons >
                    <navigation  />
                            <div class="pt-4">
                    <pagination  />
                        </div>
                  </template>
            </carousel>
        </div>
 </div>
 
</template>
<script>
import * as turf from "@turf/turf";
import {reactive,toRaw,defineProps} from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import router from '@/router';
   export default {
    components:{
    Carousel,
    Slide,
    Pagination,
    Navigation,},
    props:["restaurantsList","address"],
    methods:{
        calculateDistance(restCoordinates){
            const {longitude,latitude} = toRaw(restCoordinates);
            return turf.distance(turf.point([longitude,latitude]),turf.point([this.address.longitude,this.address.latitude]),{
                units:"kilometers"
            }).toFixed(2)
        },
    },
    setup(){
        const fields = reactive({
            restaurantsList:[],
            restaurantLength:0,
            breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
    },
        })
        const goToDetails = (index)=>{
            router.push({path:`/restaurant/${index}`});
        }
        return {fields,goToDetails};
    }
   }
</script>
<style lang="scss" >
.single-restaurant{
    width: 300px;
    padding: 7px;
    border-radius: 25px;
    transition: .3s ease-in-out;    
    background-color: white;
    box-shadow: rgba(#e9ecef, 1) 0px 0px 16px;
    &-image{
        height: 180px;
        border-radius: 25px;
        width: 100%;
        overflow: hidden;
        position: relative;
        img{
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    }
    &-discount{
        position: absolute;
        height: 35px;
        margin: 10px;
        border-radius: 7px;
        width: 100px;
        background-color: #fb8500;
        bottom: 7px;
        right: 3px;
    }
    &:hover{
        transition: .3s ease-in-out;
        transform: scale(1.02);
    }
}
</style>