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

const firebaseApp = firebase.initializeApp(firebaseConfig);
/* Up until now, firebase was just being our authentication back end */
/* But from now on it will serve also as our database for out CRUDs using */
/* firestore() */
const db = firebaseApp.firestore();
const remindersCollection = db.collection('reminders');

/* Now, lets _Create_ */
export const create = detail => {
  return remindersCollection.add(detail);
}



createApp(App).use(router).mount('#app');