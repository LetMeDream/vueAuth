<template>
    <section class="login container-fluid" style='min-height:calc( 100vh - 100px )'>
        <div  class="columns ">
            <div class="column is-4 is-offset-4">
                <h1 class='block'>Let us login</h1>
                <form @submit.prevent='login'>

                    <div class="field">
                        <div class="control has-icons-left">
                            <input v-model='email' class="input is-small" type="email" placeholder="Email">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control has-icons-left block">
                            <input v-model='pass' class="input is-small" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>

                    <input class='button is-outlined is-small block' type="submit" value="Login">

                    <p class='block'>
                        Need an account?
                        <router-link to='/register'>Then register</router-link>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import {ref} from 'vue'
import firebase from 'firebase'
import { onBeforeMount } from 'vue'
import {  useRouter, useRoute } from 'vue-router'

export default {

    setup(){
        const router = useRouter();
        const route = useRoute();


        const email = ref('');
        const pass = ref('');

        const login = () => {

            firebase.auth()
                .signInWithEmailAndPassword(email.value, pass.value)
                .then((data) => {
                    console.log(data);
                    router.replace('/');
                    })
                .catch( err => alert(err.message))

        }

        onBeforeMount(()=>{
            const user = firebase.auth().currentUser;
            if(user){

                if((route.path == '/login')||(route.path == '/register')){
                    router.replace('/');
                    alert('You have already logged-in');
                }

            }
        });

        return{
            login,email,pass
        }

    }

}
</script>

<style>



</style>