<template>
    <div class="alert-wrapper">
        <div v-for="(messageData, index) in messages" >
            <div :class="'alert alert-' + messageData.type+ ' fade show overflow-auto'" role="alert">
                {{ messageData.message }}
                <button @click="this.removeMessageByIndex(index)" type="button" class="close float-lg-end" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: "alert.vue",
    computed: {
        ...mapGetters(['messages'])
    },
    methods: {
        ...mapActions(['removeMessageByIndex'])
    },
    watch: {
        messages() {
            console.log("this.messages",this.messages)
        },
    }
}
</script>

<style scoped>
    .alert-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        min-width: 25%;
    }
</style>
