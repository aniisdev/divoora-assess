<template>
    <div id="navbar">
        <div class="grid md:grid-cols-12 xs:grid-cols-2 h-full">
            <div class="flex items-center pl-5 col-span-2">
              <img class="h-9" :src="require('../assets/images/logo.svg')" alt="">
            </div>
            <div class="full-center items-center xs:hidden md:block col-span-8">
                <NavBarLocation ></NavBarLocation>
            </div>
            <div class="flex items-center justify-end col-span-2">
                <div class="navbar-user">
                    <div class="navbar-user-img overflow-hidden">
                        <img :src="require('../assets/images/name-min.jpg')" alt="">
                    </div>
                    <h1 class="xs:hidden md:block">Anis Khenissa</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBarSearch from "./NavBar/components/NavBarSearch.vue"
import NavBarLocation from "./NavBar/components/NavBarLocation.vue"
import { onMounted, reactive } from "vue";
export default{
    components:{NavBarLocation},
    setup(){
        const fields = reactive({
            location:"",
        });
        onMounted(()=>{
            const location = window.localStorage.getItem("location");
            if(location){
                fields.location = JSON.parse(location);
            }
        });
        return {fields};
    }
    
}
</script>
<style lang="scss">
#navbar{
    z-index: 99;
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(#e9ecef, 1) 0px 0px 16px;
    backdrop-filter: saturate(1) blur(20px) !important;
}
.navbar-cart{
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 7px;
    box-shadow: rgba(17, 12, 26, 0.1) 0px 0px 16px;
    position: relative;
    span{
        position: absolute;
        color: white;
        top: -8px;
        font-size: 11px;
        border-radius: 50%;
        text-align: center;
        right: -7px;
        height: 20px;
        width: 20px;
        background-color: red;
    }
}
.navbar-user{
    margin: 0 35px;
    display: flex;
    align-items: center;
    &-img{
    height: 40px;
    width: 40px;
    border-radius: 10px;
    margin-right: 10px;
    box-shadow: rgba(17, 12, 26, 0.1) 0px 0px 16px;
    }
    h1{
        font-size: 12px;
        font-weight:500;
    }
}

</style>