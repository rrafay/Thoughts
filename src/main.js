import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'




Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBzzzrcgmKV03Y8M5DftNyRdVfniPZRWoI",
  authDomain: "thoughts-db2c7.firebaseapp.com",
  databaseURL: "https://thoughts-db2c7.firebaseio.com",
  projectId: "thoughts-db2c7",
  storageBucket: "thoughts-db2c7.appspot.com",
  messagingSenderId: "392823859771",
  appId: "1:392823859771:web:50f958d539f0aaf58f0a1e",
  measurementId: "G-XS6QYC42D8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app; 
firebase.auth().onAuthStateChanged(user =>{
  console.log(user)
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})


