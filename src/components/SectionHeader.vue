<template>
    <div class="section-header-name">
        <slot></slot>
    </div>
</template>
<script>

export default{
}
</script>
<style lang="scss">
.section-header-name{
    h1{
            font-weight: bold;
        }
        span{
            font-weight: 500;
            color: #adb5bd;
        }
}
</style>