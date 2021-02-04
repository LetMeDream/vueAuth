<template>
    <section class="register container-fluid" style='min-height:calc( 100vh - 100px )'>
        <div class="columns" >
            <div class="column is-4 is-offset-4">

                <h1 class='block'>Let us register</h1>

                <form @submit.prevent='register'>
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
                            <input v-model='password' class="input is-small" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>

                    <input class='button is-outlined is-small block' type="submit" value="Register">

                    <p>
                        Have an account?
                        <router-link to='/login'>Then login</router-link>
                    </p>

                </form>

            </div>

        </div>


    </section>
</template>

<script>
import {ref} from 'vue'
import firebase from 'firebase'
import { useRouter, useRoute } from 'vue-router'


export default {
    setup(){
        const email = ref('');
        const password = ref('');
        const router = useRouter();
        const route = useRoute();
        let rute = route.path;

        const register = () => {

            firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
            .then(user =>{
                alert(user);
                console.log(user);
                router.replace('/');
            })
            .catch(err=>alert(err.message))

        }

        /* If someone's logged in; who is it? */
        const user = firebase.auth().currentUser;
        if((user)){
            router.replace('/');
            /* alert('You have already logged-in'); */
        }




        return {
            register, email, password, rute
        }

    },
    mounted: function () {
        // `this` points to the vm instance
        const route = useRoute();
        let path = route.path;
        console.log('a is: ' + path);
    }
}
</script>

<style>

</style>