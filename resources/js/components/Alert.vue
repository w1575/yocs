<template>
    <div class="alert-wrapper">
        <div v-for="(messageData, index) in messages" >
            <div :class="'alert alert-' + messageData.type+ ' alert-dismissible fade show overflow-auto'" role="alert">
                {{ messageData.message }}
                <button type="button" class="close float-lg-end" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: "alert.vue",
    computed: {
        ...mapGetters(['messages'])
    }
}
</script>

<style scoped>

</style>
