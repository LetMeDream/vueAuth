<template>
  <div class="about container-fluid" style='min-height:calc( 100vh - 100px )'>
    <h1>This is an about page</h1>
  </div>
</template>


<script>
import firebase from 'firebase'
import {  useRouter, useRoute } from 'vue-router'

export default {

    setup(){
        const router = useRouter();

        /* If someone's logged in; who is it? */
        const user = firebase.auth().currentUser;
        if (!user){
            router.replace('/login');
            alert("Log in first");
        }


    },
    mounted: function () {
        // `this` points to the vm instance
        const route = useRoute();
        let path = route.path;
        console.log('From ABOUT, path is: ' + path);
    }

}
</script>