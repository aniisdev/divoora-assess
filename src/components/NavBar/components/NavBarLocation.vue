<template>
    <div class="h-full">
        <div class="flex items-center justify-center h-full" v-if="fields.location != null">
         <div class="flex items-center" style="white-space: nowrap;">
             <v-icon name="co-location-pin"></v-icon>
             <h1 class="text-sm current-location">Current Location: <span style="color:#22223B" class="font-medium">{{fields.location}}</span></h1>
         </div>
        <div id="delete-location" class="h-9 flex items-center ml-3 bg-red-400 pl-2 pr-2 text-white rounded-md cursor-pointer" @click="deleteLocation">
            <v-icon name="md-editlocationalt-sharp" class="mr-2"></v-icon>
            <h1 class="text-xs">Change Location</h1>
        </div>
       </div>
    </div>
</template>
<script>
import storageHelper from "@/helpers/storageHelper";
import {onMounted, reactive} from "vue";
import locationService from "@/services/locationService"
export default {
    data(){
        return{
            fields:{
                location:null
             }
        }
    },
    mounted(){
        const location = locationService.loadUserLocation();
            if(location != -1){
                this.fields.location = location.address;
       }
    },
    methods:{
         deleteLocation(){
            storageHelper.deleteItem("location")
            this.fields.location = null;
            window.location.reload();
        }
    },

}
</script>
<style lang="scss">
.current-location{
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;   
    -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;
}
</style>