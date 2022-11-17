<template>
  <NavBar v-if="!fields.rerendred"></NavBar>
  <div class="mt-16">
    <router-view @updateUserLocationNav="updateUserLocationNav"/>
  </div>
</template>
<script lang="js">
import NavBar from './components/NavBar.vue';
import "./assets/styles/utils.scss"
import {reactive,nextTick} from "vue";
export default {
    components: { NavBar },
    setup(){
      const fields = reactive({
        rerendred:false,
      });
      const updateUserLocationNav = async(_)=>{
        fields.rerendred = true;
        await nextTick();
        fields.rerendred = false; 
       }
      return {updateUserLocationNav,fields}
    }
}
</script>
