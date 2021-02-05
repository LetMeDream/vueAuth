<template>
  <div id="app">
    <link href="https://jenil.github.io/bulmaswatch/materia/bulmaswatch.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

    <nav class="navbar" role="navigation" aria-label="main navigation">
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

      <div class="navbar-end" :class='invisibleObject' >
        <div class="navbar-item">
          <div class="buttons">
              <router-link class='button is-primary' to="/register">
                <strong>Sign up</strong>
              </router-link>

              <router-link class="button is-light" to="/login">
                <strong>Log in</strong>
              </router-link>
          </div>
        </div>
      </div>

    </nav>

    <router-view/>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount } from 'vue'
import firebase from 'firebase'



export default {

  setup(){

    const router = useRouter();
    const route = useRoute();

    onBeforeMount(()=>{

      firebase.auth().onAuthStateChanged((user)=>{

        if(!user){
          /* If not logged, log */
          router.replace('/login');

        } else{

          /* if ((route.path == '/login')){

          } */

        }
      })

    });


    return{
      route
    }



  },
  mounted: function () {
    const route = useRoute();
    let path = route.path;
    console.log('a is: ' + path);
  },

  computed:  {

    invisibleObject(){
      const route = useRoute();
      let path = route.path;
      return{

        visible : path == '/login' || path == '/register',
        invisible : path == '/' || path == '/about'

      }
    }

  }


}
</script>

<style lang="scss">
*{
  font-family: 'Roboto', sans-serif;
}
.invisible{
  display:none !important;
}
.visible{display: block im !important;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: whitesmoke;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
