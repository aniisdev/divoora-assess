<template>
       <HalfCircleSpinner v-if="active || true" :animation-duration="1000"
                :size="60"
                color="#ff1d5e">
       </HalfCircleSpinner>
</template>
<script>
export default{
    props:["active"],
}
</script>