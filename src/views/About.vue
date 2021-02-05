<template>
  <div class="about">
    <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">
              Home
            </router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/about">
              About
            </router-link>
          </a>

        </div>

      </div>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>

    </nav> -->
    <div class="center container-fluid" style='min-height:calc( 100vh - 56px )'>

      <div class="reminder-container">

        <h1 class='block'>These are just reminders</h1>
        <div class="">
          <form @submit.prevent='remindIt'>
            <div class="field">
              <div class="control">
                <input required v-model='form.title' class="input" type="text" placeholder="text">
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <textarea required v-model='form.detail' class="textarea" type="text" placeholder="details"></textarea>
              </div>
            </div>

            <input class='button is-small is-outlined' value='remind' type="submit">

          </form>
        </div>
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

<style>

  .reminder-container{
    width:300px;
    position:relative;
    top:-28px;
  }


</style>