<template>
    <div class="p-10">
        <p class="mb-4">Item Name</p>
        <input  type="text" placeholder="Item Name" class="w-full p-4 border mb-4" v-model="fields.name">
        <p class="mb-4">Item Description</p>
        <input type="text" placeholder="Item Description" class="w-full p-4 border mb-4" v-model="fields.description">
        <p class="mb-4">Item Image</p>
        <input type="text" placeholder="Item Image" class="w-full p-4 border mb-4" v-model="fields.image">
        <p class="mb-4">Menu</p>
        <select id="cars" class="w-full border p-4 mb-4" v-model="fields.menus_id">
            <option v-for="(item,index) in fields.menusList" :key="index" :value="item.id">{{item.name}}</option>
       </select>
        <p class="mb-4">Restaurant</p>
        <select id="cars" class="w-full border p-4" v-model="fields.restaurants_id">
            <option v-for="(item,index) in fields.restaurantsList" :key="index" :value="item.id">{{item.name}}</option>
       </select>
       <div class="mt-4 bg-red-500 w-full h-16 mt-4 rounded-md full-center cursor-pointer" @click="createItem">
            <h1 class="text-white">Add Item</h1>
       </div>
    </div>
</template>
<script>
import { onMounted, reactive, toRaw } from 'vue';
import restaurantService from '@/services/restaurantService';
import axios from 'axios';
export default{
    setup(){
        const fields = reactive({
            name:'',
            restaurantsList:[],
            menusList:[],
            image:'',
            menus_id:{},
            restaurants_id:{},
            price:Math.floor(Math.random() * 50),
            description:'',
        });
        onMounted(async ()=>{
            fields.restaurantsList = await restaurantService.loadRestaurantsList();
            fields.menusList = await restaurantService.loadMenusList();
        });
        const createItem = async()=>{
            await axios.post('/api/items/create',toRaw(fields));
        }
        return {fields,createItem};
    }
}
</script>