<template>
    <div class="h-screen w-full full-center" v-if="fields.restaurantMenu.length == 0">
        <HalfCircleSpinner :animation-duration="1000"
                :size="60"
                color="#ff1d5e">
         </HalfCircleSpinner>
    </div>
    <div class="mt-5 relative h-full">
        <div class="restaurant-details-banner"  v-if="fields.restaurantMenu.length >0">
            <div class="restaurant-details-container">
                <h1 class="font-bold text-lg">{{fields.restaurantDetails.name}}</h1>
                <div>
             <div class="flex items-center mt-2">
                <div>
                    <div class="mt-2 flex items-center">
                    <div class="h-7 w-7 bg-yellow-100 rounded-full full-center">
                    <v-icon name="md-deliverydining-sharp" color="#ffb703"></v-icon> 
                 </div>
                <h1 class="text-xs ml-2 font-medium">Free Delivery</h1>
            </div>
                </div>
            </div>
                </div>
            </div>
           <img src="https://unsplash.com/photos/Ciqxn7FE4vE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY4Mjc1NzQ1&force=true&w=2400" alt="">    
        </div>
        <div class="restaurant-details-container-menu-wrapper ">
            <div class="restaurant-details-container-menu">
            <ul>
                <li v-for="(item,index) in fields.restaurantMenu" :key="index" :class="[fields.selectedMenu == index ? 'selected-menu' : '']">
                    {{item.name}}
                </li>
            </ul>
       </div>
       <div style="padding:50px;margin-top:40px">
        <div class="flex flex-col ml-12">
            <div v-for="(item,index) in fields.restaurantMenu" :key="index" :id="item.id" class="mt-12"> 
                <div class="font-bold mb-6 ml-3" v-if="item.items.length > 0">
                    {{item.name}}
                </div>
                <div class="grid grid-cols-4 gap-10"  v-if="item.items.length > 0">
                    <div v-for="(menuItem,menuIndex) in item.items" :key="menuIndex">
                    <div class="restaurant-details-item-single">
                    <div class="restaurant-details-item-single-image full-center">
                       <img :src="menuItem.image" alt="">
                    </div>
                    <div class="restaurant-details-item-single-content">
                       <h1>{{menuItem.name}}</h1>
                        <p>{{menuItem.description}}</p>
                        <div class="restaurant-details-item-single-content-price mb-3">
                            <h1>{{menuItem.price}} CHF</h1>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
       </div>
        </div>
    </div>
</template>
<script>
import restaurantService from "@/services/restaurantService";
import { useRoute } from 'vue-router';
import { onUnmounted, onMounted, reactive,toRaw} from 'vue';
  export default{
    setup(){
        const route = useRoute();
        const fields = reactive({
            restaurantDetails:{},
            restaurantMenu:[],
            selectedMenu:0,
        })
        onMounted(async()=>{
         window.scrollTo(0,0);
         fields.restaurantDetails = await restaurantService.loadSingleRestaurant({id:route.params.id});
         fields.restaurantMenu = toRaw(fields.restaurantDetails.menus);
         fields.restaurantMenu.forEach((element)=>{
            element["items"] = [];
         });
         const items = toRaw(fields.restaurantDetails.items);
         for (let i=0;i<fields.restaurantMenu.length ;i++){
            const itemFilter = items.filter((element)=>element.menus_id == fields.restaurantMenu[i].id);
            fields.restaurantMenu[i].items = itemFilter;
         }
         const menuElement = document.getElementsByClassName("restaurant-details-container-menu")[0];
         document.addEventListener("scroll",()=>{
            const scrolled = window.scrollY;
            for(let i = 0;i<fields.restaurantMenu.length;i++){
                const element = document.getElementById(`${fields.restaurantMenu[i].id}`);
                const elementPosition = (element.offsetTop + element.offsetHeight) - 450;
                const distance = scrolled - elementPosition;
                if(distance >= -10){
                    fields.selectedMenu = i;
                }
            }
            if(scrolled >= 219){
                    menuElement.classList.add("restaurant-menu-sticky");
                }else{
                    menuElement.classList.remove("restaurant-menu-sticky");
                }
            });
        });
        onUnmounted(()=>{
            window.removeEventListener("scroll",{});
            fields.restaurantMenu = [];
        })
        return {fields};
    }
  }
</script>
<style lang="scss">
.restaurant-details-item-single{
    width: 280px;
    cursor: pointer;
    transition: .3s ease-in-out;        
    background-color: white;
    box-shadow: rgba(17, 17, 26, 0.08) 0px 0px 16px; 
    border-radius: 20px;
    &-image{
        height: 200px;
        width: 100%;
        padding: 10px;
        img{
            border-radius: 15px;
            box-shadow: rgba(17, 17, 26, 0.08) 0px 0px 16px; 
            height: 100%;
            width: 100%;
            object-fit: cover;
            overflow: hidden;
        }
    }
    &-content{
        padding: 5px 17px;
        h1{
            font-size: 14px!important;
            font-weight: 600!important;
        }
        p{
            font-size: 13px!important;
            margin-bottom: 7px;
            font-weight: 400;
            text-overflow: ellipsis;
            display: -webkit-box;
            overflow: hidden;   
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        &-price{
            border-radius: 7px;
            margin-top: 5px;
            display: inline-block;
            background-color: #22223B;
            color: white;
            padding: 5px 10px;
            font-size: 13px!important;
        }
    }
    &-cart{
        height: 40px;
        border-radius: 35px;
        width: 80%;
        background-color: #E20613;
        margin-bottom: 15px;
    }
  
}
.restaurant-details-container-menu-details{
    margin: 10px;
    z-index: 999;
    overflow-x: hidden;
    width: 90%;
    left: 44%;
    position: absolute;
    background-color:white;
    top:280px;
    transform: translateX(-44%);
    box-shadow: rgba(17, 17, 26, 0.04) 0px 0px 16px; 
}
.restaurant-menu-sticky{
    position: fixed!important;
    background-color: white!important;
    top: 60px!important;
    width: 100%!important;
}
.restaurant-items-sticky{
    position: fixed!important;
    background-color: white!important;
    top: 110px!important;

}
.selected-menu {
    color: red;
    &::after{
        background-color: #E20613!important;
    }
}
.restaurant-details-container-menu{
    height: 50px;
    margin: 10px;
    overflow-x: hidden;
    width: 90%;
    left: 44%;
    position: absolute;
    background-color:white;
    top:230px;
    transform: translateX(-44%);
    box-shadow: rgba(17, 17, 26, 0.04) 0px 0px 16px; 
    ul{
        height: 100%;
        display: flex;
        align-items: center;
        li{
            font-weight: 500;
            position: relative;
            padding: 0 35px;
            &:after{
                position: absolute;
                height: 2px;
                content: "";
                width: 100%;
                left: 0;
                bottom: -13px;
            }
        }
    }
}
.restaurant-details-banner{
    height: 200px;
    position: relative;
    width: 100%;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
.restaurant-details-container{
    padding: 20px;
    position: absolute;
    background-color:white;
    border-radius: 5px;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    top: 130px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
}
</style>