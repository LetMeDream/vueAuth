<template>
  <div class="home">
    <h1>No place like home</h1>
    <h1>Welcome, {{ name }}</h1>
    <router-link to='/about'>Learn about me</router-link> or... <br>

    <button class='logout' @click='logout'>Logout</button>
  </div>
</template>

<script>
  import { onBeforeMount , ref } from 'vue';
  import firebase from 'firebase';
  import { useRouter } from 'vue-router';

  export default {

    setup () {
      const name = ref('');

      const router = useRouter();

      const counter = ref(0);
      /* If someone's logged in; who is it? */
      const user = firebase.auth().currentUser;
      if (!user){
        router.replace('/login');
        alert("Log in first");
        counter.value++;
        console.log(counter.value)
      }

      onBeforeMount(() => {



        if (user){

          name.value = user.email.split('@')[0];

        }



      });

    const logout = () => {

      firebase.auth().signOut()
        .then(()=>alert('You have been logged out, ' + name.value))

    }

    return {name,logout}

  }

  }

</script>
