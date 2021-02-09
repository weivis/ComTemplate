<template>
    <div>
        <layout-appmain/>
    </div>
</template>

<script>
import appmain from './AppMain'
    export default {
        name:'Layout',
        methods: { //事件处理器
        },
        components: { //定义组件
            'layout-appmain':appmain,
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>