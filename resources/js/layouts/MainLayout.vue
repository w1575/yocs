<template>
    <div id='root'>
<!--        <img src='./logo.png' />-->
        <div id='nav'>
            <router-link to='/'> Home</router-link>
            <router-link to='/contact'>Contact </router-link>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    name: "main",
    data: () => ({
        layout: '',
    })
}
</script>

<style scoped>

</style>
