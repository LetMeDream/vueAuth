<template>
  <div id="app">
    <!-- <div id="nav">
      |
      |
       |
      <router-link :class='{invisible : user}' to="/register">Register</router-link>
    </div> -->

    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li :class="{ 'is-active': route.path == '/' ? true : false  }"><router-link to="/">Home</router-link></li>
        <li :class="{ 'is-active': route.path == '/about' ? true : false  }"><router-link to="/about">About</router-link> </li>
        <li :class="{ 'is-active': route.path == '/login' ? true : false }" ><router-link :class='{invisible : user}' to="/login">Login</router-link></li>
        <li :class="{ 'is-active': route.path == '/register' ? true : false }"><router-link to="/register">Register</router-link></li>
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
  display:none;
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
