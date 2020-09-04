<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="isLoggedIn" to="/">Posts </router-link> 
      <router-link v-if="isLoggedIn" to="/about">About </router-link> 
      <router-link v-if="!isLoggedIn" to="/login">Login </router-link> 
      <router-link  v-if="!isLoggedIn" to="/register">Register </router-link>
      <button v-if="isLoggedIn" @click="logout" class="btn black">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>

import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      isLoggedIn: false,
      currentUser:false
    }
  },
  created(){
    if(firebase.auth().currentUser){
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({path : this.$router.path})
          
        })
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color:lightgreen;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
