<template>
  <div id="app">
    <link rel="stylesheet" href="https://jenil.github.io/bulmaswatch/materia/bulmaswatch.min.css">

    <nav class="breadcrumb is-centered pt-5" aria-label="breadcrumbs">
      <ul>
        <li :class="{ 'is-active': route.path == '/' ? true : false  }"><router-link to="/">
          <span class="icon is-small">
            <i class="fas fa-home"></i>
          </span>
          Home
        </router-link></li>
        <li :class="{ 'is-active': route.path == '/about' ? true : false }"><router-link to="/about">
          <span class="icon is-small">
            <i class="fas fa-barcode"></i>
          </span>
          About
        </router-link> </li>
        <li :class="{ 'is-active': route.path == '/login' ? true : false }" ><router-link :class='{invisible : user}' to="/login">
          <span class="icon is-small">
            <i class="fas fa-user-alt"></i>
          </span>
          Login
        </router-link></li>
        <li :class="{ 'is-active': route.path == '/register' ? true : false }"><router-link to="/register">
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
          Register
        </router-link></li>
      </ul>
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
    // `this` points to the vm instance
    const route = useRoute();
    let path = route.path;
    console.log('a is: ' + path);
  }


}
</script>

<style lang="scss">
.invisible{
  display:none !important;
}
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
