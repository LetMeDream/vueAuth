<template>
  <div class="home container-fluid" style='min-height:calc( 100vh - 100px )'>
    <h1>No place like home</h1>
    <h1>Welcome, {{ name }}</h1>
    <router-link to='/about'>Learn about me</router-link> or... <br>

    <button class='button is-small' @click='logout'>Logout</button>
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
