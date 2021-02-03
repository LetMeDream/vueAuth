<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
import firebase from 'firebase'
import {  useRouter } from 'vue-router'

export default {

    setup(){
        const router = useRouter();

        /* If someone's logged in; who is it? */
        const user = firebase.auth().currentUser;
        if (!user){
            router.replace('/login');
            alert("Log in first");
        }


    }

}
</script>