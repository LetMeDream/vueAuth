import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

require('../assets/bulma.scss');

const firebaseConfig = {
  apiKey: "AIzaSyCsp3NpMWLZEPI-tZAUbAWnM7EC2VMjZA0",
  authDomain: "let-auth-vue.firebaseapp.com",
  projectId: "let-auth-vue",
  storageBucket: "let-auth-vue.appspot.com",
  messagingSenderId: "479795575173",
  appId: "1:479795575173:web:b37f1a3a815beccceaecec"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');