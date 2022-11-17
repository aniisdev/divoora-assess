<template>
    <div class="nav-bar-search flex items-center mt-3 bg-white">
        <v-icon  name="hi-search" class="mr-4"/>
        <input type="text" placeholder="Restaurant Name...">
        <button class="full-center">Search</button>
    </div>
</template>
<style lang="scss">
.nav-bar-search{
    height: 40px;
    width: 450px;
    padding: 0 10px 0 15px;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 50px;
    overflow: hidden;
    input{
        height: 100%;
        width: 100%;
        outline: none;
    }
    button{
        height: 30px;
        color: white;
        margin: 0;
        padding: 0 15px;
        font-size: 15px;
        background-color: #E20613;
        border-radius: 7px;
    }
}
</style>