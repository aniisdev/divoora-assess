import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = "https://divoora-assess.herokuapp.com/";
//tailwind css
import "./assets/styles/style.css"
//global css variables
//mapbox
import 'mapbox-gl/dist/mapbox-gl.css';
//spinner
import { HalfCircleSpinner } from 'epic-spinners'
//loading component
import Loading from "./components/loadingComponent"
//import icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {GiKnifeFork ,BiBagCheckFill ,MdEditlocationaltSharp,HiPlusCircle,MdDeliverydiningSharp , MdSearchOutlined,HiSearch,BiCart,CoLocationPin,HiSolidStar,GiPathDistance,BiArrowRightShort  } from "oh-vue-icons/icons";
addIcons(GiKnifeFork ,BiBagCheckFill ,MdEditlocationaltSharp ,HiPlusCircle,MdDeliverydiningSharp ,MdSearchOutlined,HiSearch,BiCart,CoLocationPin,HiSolidStar,GiPathDistance,BiArrowRightShort );
const app = createApp(App);
app.use(router);
app.use(store);
app.component("v-icon", OhVueIcon);
app.component("HalfCircleSpinner",HalfCircleSpinner);
app.component('Loading',Loading);
app.mount("#app");
