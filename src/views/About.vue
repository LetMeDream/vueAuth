<template>
  <div class="about container-fluid" style='min-height:calc( 100vh - 100px )'>
    <h1>These are just reminders</h1>

    <div class="columns">
      <div class="column is-4 is-offset-4">
        <form @submit.prevent='remindIt'>
          <div class="field">
            <div class="control">
              <input v-model='form.title' class="input is-small" type="text" placeholder=" text">
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left">
              <textarea v-model='form.detail' class="textarea is-small" type="text" placeholder="details"></textarea>
            </div>
          </div>

          <input class='button is-small is-outlined' value='remind' type="submit">

        </form>




      </div>
    </div>


  </div>
</template>


<script>
import firebase from 'firebase'
import {  useRouter, useRoute } from 'vue-router'
/* in order to CREATE */
import { create } from '../main'
/* doing it the 'reactive' (guy-from-the-youtube-video) way */
import { reactive } from 'vue'

export default {

    setup(){
        const router = useRouter();

        /* If someone's logged in; who is it? */
        const user = firebase.auth().currentUser;
        if (!user){
            router.replace('/login');
            alert("Log in first");
        }

        /*  Reminders */
        const form = reactive({title:'' , detail:'' })
        const remindIt = async () => {
          await create({ ...form })
          form.title = '';
          form.detail = '';
        }
        return { remindIt , form }

    },
    mounted: function () {
        // `this` points to the vm instance
        const route = useRoute();
        let path = route.path;
        console.log('From ABOUT, path is: ' + path);
    },


}
</script>