<template>
    <div class="p-10 relative">
        <dashboardIntro></dashboardIntro>
        <dashboardLocation  @updateUserLocationNav="updateUserLocationNav"></dashboardLocation>
        <div :class="[!fields.hasAddress ? 'mt-7' : 'mt-5']">
         <SectionHeader>
         <h1>Menu <span>Categories</span></h1>
        </SectionHeader>
        <MenuCategoriesPage></MenuCategoriesPage>
        <SectionHeader class="mt-10">
                <h1>Near <span>You</span></h1>
        </SectionHeader>
        <NearRestaurants :restaurantsList="fields.restaurantsList" :address="fields.address"></NearRestaurants>
        </div>
    </div>
</template>
<script>
import MenuCategoriesPage from './menu/MenuCategoriesPage.vue';
import NearRestaurants from "./restaurants/NearRestaurants.vue"
import SectionHeader from '@/components/SectionHeader.vue';
import dashboardIntro from './dashboardIntro.vue';
import dashboardLocation from './location/dashboardLocation.vue';
import {onMounted,reactive,toRaw,nextTick} from "vue";
import locationService from '@/services/locationService';
export default{
    components:{dashboardIntro,MenuCategoriesPage,SectionHeader,NearRestaurants,dashboardLocation},
    setup(props,{emit}){
        const fields = reactive({
           hasAddress:false,
           restaurantsList:[],
           address:null,
        });
        const updateUserLocationNav = async(data)=>{
            fields.restaurantsList = toRaw(data.restaurants);
            fields.address = data.address;
            emit("updateUserLocationNav",data);
        };
        onMounted(()=>{
           const location = locationService.loadUserLocation();
           fields.hasAddress = location != -1;
        })
        return {updateUserLocationNav,fields};
    }
}
</script>
script
<style>
.intro{
  height: 100px;
  margin-bottom: 18px;
  border-radius: 15px;
  width: 100%;
  background: linear-gradient(to right,#E5183F,#E8673A,#4F91CC);
}
</style>