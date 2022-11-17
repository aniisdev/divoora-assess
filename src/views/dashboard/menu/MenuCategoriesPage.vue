<template>
    <div class="menu-categories-wrapper">
        <div class="full-center mt-4 mb-2" v-if="fields.menusList.length == 0">
            <Loading></Loading>
        </div>
 <div class="menu-categories"  v-if="fields.menusList.length > 0">
            <div class="grid grid-cols-7">
                <div v-for="item in fields.menusList" :key="item">
                    <div class="menu-category-single mt-5 cursor-pointer">
                <div class="menu-category-single-container">
                </div>
                <div class="menu-category-single-icon p-4">
                    <img :src="item.image" alt="">
                </div>
                <div class="menu-category-single-title">
                    <h1>{{item.name}}</h1>
                </div>
                <div class="menu-category-single-next full-center">
                    <v-icon name="bi-arrow-right-short" color="white"></v-icon>
                </div>
            </div>
                </div>
            </div>
        </div> 

    </div>
</template>
<script>
import {onMounted,reactive} from "vue";
import restaurantService from "@/services/restaurantService";
  export default {
    setup(){
        const fields = reactive({
            menusList:[],
            isLoading:true,
            isFullPage:false,
        });
        onMounted(async()=>{
            fields.menusList = await restaurantService.loadMenusList();
        });
        return {fields};
    }
  }
</script>
<style lang="scss">
.menu-category-single{
    transition: .3s ease-in-out;
    height: 170px;
    background-color: white;
    width: 100px;
    box-shadow: rgba(17, 17, 26, 0.04) 0px 0px 16px;
    position: relative;
    border-radius: 20px;
    &-icon{
        transition: .3s ease-in-out;    
        position: absolute;
        height: 60px;
        width: 60px;
        background-color: white;
        top: 32%;
        border: 2px solid #22223B   ;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 50%;
        box-shadow: rgba(17, 17, 26, 0.04) 0px 0px 16px;
    }
    &-title{
        position: absolute;
        bottom: 47px;
        left: 50%;
        transform: translateX(-50%);
        h1{
            font-weight: 600;
        }
    }
    &-next{
        transition: .3s ease-in-out;
        height: 27px;
        width: 27px;
        border-radius: 50%;
        position: absolute;
        background-color: #22223B;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    &:hover{
        transition: .3s ease-in-out;
        background-color: #E20613;
        transform: scale(1.03);
        .menu-category-single-icon img{
            transition: .3s ease-in-out;
            filter: grayscale(0);
        }
        .menu-category-single-title{
            color: white;
        }
        .menu-category-single-next{
            transition: .3s ease-in-out;
            background: white;
            svg{
                fill: #E20613;
            }
        }
    }
}
.menu-categories{
    &-name{
        h1{
            font-weight: bold;
        }
        span{
            font-weight: 500;
            color: #adb5bd;
        }
    }
}
</style>