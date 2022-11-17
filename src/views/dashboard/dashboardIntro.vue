<template>
    <div class="intro-dashboard">
        <div style="height:65vh" class="flex items-center flex-col justify-center text-center">
            <div class="intro-dashboard-delivery">
                <div class="flex items-center h-full">
                    <h1>Bike Delivery</h1>
                    <div class="intro-dashboard-delivery-icon full-center">
                        <v-icon name="md-deliverydining-sharp"></v-icon>
                    </div>
                </div>
            </div>
            <div class="intro-dashboard-title">
                <h1>The Fatest Delivery<br> in <span>Your City</span></h1>
                <p>Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.</p>
            </div>  
        </div>
        <div style="height:20vh" class="grid grid-cols-3 gap-10">
            <div v-for="(item,index) in fields.items" :key="index" class="intro-dashboard-subs full-center">
                <div class="intro-dashboard-subs-icon full-center">
                    <v-icon :name="item.icon" scale="1.2"></v-icon>
                </div>
                <div class="intro-dashboard-subs-content">
                    <h1>{{item.name}}</h1>
                    <p>{{item.message}}</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import {ref} from "vue";
export default{
    setup(){
        const fields = ref({
            items:[{
                name:"Fast Delivery",icon:"md-deliverydining-sharp",message:"Delivery within minutes"
            },{
                name:"Pickup",icon:"bi-bag-check-fill",message:"Pickup the delivery at your door",
            },{

                name:"Dine it",icon:"gi-knife-fork",message:"Enjoy your food",
            }]
});
return {fields}     
}
}
</script>
<style lang="scss">
.intro-dashboard-subs{
    display: flex;
    align-items: center;
    &-icon{
        height: 60px;
        width: 60px;
        background-color: white;
        border-radius: 50%;
        box-shadow: rgba(#e9ecef, 1) 0px 0px 16px;
        color: #E20613;
    }
    &-content{
        margin-left: 15px;
        p{
            font-weight: 500;
            font-size: 13px;
        }
    }
}
.intro-dashboard{
    height: 90vh;
    width: 100%;
    font-weight: bold;
    &-delivery{
            padding: 0 25px;
            display: inline-block;
            align-items: center;
            height: 45px;
            font-weight: 600;
            border-radius: 10px;
            background-color: rgba(#E20613,.07);
            &-icon{
                margin-left: 25px;
                background-color:rgba(#E20613,.6);
                height: 30px;
                color: white;
                width: 30px;
                border-radius: 50%;
            }
        }
        &-title{
            font-size: 80px;
            margin-top: 35px;
            span{
                color: #E20613;
            }
            p{
                font-size: 14px;
                color: gray;
                font-weight: 400!important;
            }
        }
    &-right{
        &-banner{
            height: 80%;
            position: relative;
            border-radius: 25px;
            width: 200px;
            background-color: rgba(#E20613,.5);
        @for $i from 1 through 4{
            @if $i < 3 {
                &-item:nth-child(#{$i}){
                position: absolute;
                left: -110px;
                height: 130px;
                border-radius: 10px;
                top: 40px;
                width: 170px;
                box-shadow: rgba(#e9ecef, .6) 0px 0px 16px;
                background-color: rgba(white,.7);
                 }
            }@else{
                &-item:nth-child(#{$i}){
                position: absolute;
                right: -110px;
                height: 130px;
                border-radius: 10px;
                top: 40px;
                width: 170px;
                box-shadow: rgba(#e9ecef, .6) 0px 0px 16px;
                background-color: rgba(white,.7);
             }
            }
      }
        }
    }
}
</style>