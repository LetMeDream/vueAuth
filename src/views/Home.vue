<template>
  <div class="home">

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

  <div class="container-fluid center" style='min-height:calc(100vh - 56px)'>

    <div class="box">

        <h1>No place like home</h1>
        <h1>Welcome, {{ name }}</h1>
        <router-link to='/about'>Learn about me</router-link> or... <br>

        <button class='button is-small' @click='logout'>Logout</button>

    </div>
  </div>

  </div>
</template>

<script>
  import { onBeforeMount , ref } from 'vue';
  import firebase from 'firebase';
  import { useRoute, useRouter} from 'vue-router';

  export default {

    setup () {
      const name = ref('');



      onBeforeMount(() => {

        /* If someone's logged in; who is it? */
        const user = firebase.auth().currentUser;


        if (user){

          name.value = user.email.split('@')[0];

        }



      });

    const logout = () => {

      firebase.auth().signOut()
        .then(()=>alert('You have been logged out, ' + name.value))

    }

    return {name,logout}

    },

    mounted(){

      /* If someone's logged in; who is it? */
      const user = firebase.auth().currentUser;
      const router = useRouter();
      if ((!user)){

        router.replace('/login');
      }

      // `this` points to the vm instance
      const route = useRoute();
      let path = route.path;
      console.log('From HOME, path is: ' + path);

    }

  }

</script>

<style>

    .center .box{

      width:300px;
      position:relative;
      top:-28px;

    }


</style>
