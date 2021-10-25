<template>
    <div id='main-root'>
<!--        <img src='./logo.png' />-->
        <div class="container-fluid overflow-hidden">
            <div class="row vh-100 overflow-auto">
                <div class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
                    <SideBar />
                </div>
                <div class="col d-flex flex-column h-sm-100">
                    <main class="row overflow-auto">
                        <div class="col pt-4">
                            <h3>Vertical Sidebar that switches to Horizontal Navbar</h3>
                            <router-view />
                        </div>
                    </main>
                    <footer class="row bg-light py-4 mt-auto">
                        <div class="col"> Footer content here... </div>
                    </footer>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "MainLayout"
})
</script>

<style scoped>
/* this is needed to make the content scrollable on larger screens */
@media (min-width: 576px) {
    .h-sm-100 {
        height: 100%;
    }
}
</style>
