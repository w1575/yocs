<template>


                <div class="mb-md-5 mt-md-4 pb-5">
                        <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                        <p class="text-white-50 mb-5">Please enter your login and password!</p>

                        <div class="form-outline form-white mb-4">
                            <input
                                placeholder="Email"
                                type="email"
                                id="typeEmailX"
                                class="form-control form-control-lg"
                                v-model="email"
                            />

                        </div>

                        <div class="form-outline form-white mb-4">
                            <input
                                placeholder="Password"
                                type="password"
                                id="typePasswordX"
                                class="form-control form-control-lg"
                                v-model="password"
                            />
                        </div>

                        <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                        <button
                            class="btn btn-outline-light btn-lg px-5"
                            type="button"
                            @click="submitForm"
                        >
                            Login
                        </button>



                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                            <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                        </div>
                </div>

                <div>
                    <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
                </div>

</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {
    name: "login",
    data() {
        return {
            email: "sudo@example.com",
            password: "password",
        }
    },
    methods: {

        ...mapActions([
           'addMessage',
           'clearMessages',
            'setToken'
        ]),

        validEmail: function () {
            let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (this.email && pattern.test(this.email) === false) {
                this.addMessage({message: 'Email\'s format is wrong.', type: 'danger'})
                return false;
            }

            return true;
        },

        validPassword: function() {
            console.log('this.password', this.password)
            if (this.password === "" || this.password.length < 6) {
                this.addMessage({message: 'Password is too short. Need to be 6 symbols at least.', type: 'danger'})
                return false;
            }
            return true;
        },

        validateData() {
            this.clearMessages();
            return this.validEmail() && this.validPassword();
        },

        submitForm(){
            if (this.validateData()) {
                axios.post('/api/auth', {
                    email: this.email,
                    password: this.password,
                    device_name: "test",
                }).catch(response => {
                    this.addMessage({ message: response, type: 'danger'})
                }).then(response => {
                    const token = response.data.token;
                    this.setToken(token)
                    console.log('this.homepage', this.homepage)
                    this.$router.go(0);
                })
            } else {
                console.log('Data is invalid')
            }
        },
    },
    computed: {
        ...mapGetters(['homepage'])
    }
}
</script>

<style scoped>

</style>
