<template>
   <div>
      <div class="container">
          <div class="row">
              <div class="col s12 m8 offset-m2">
                  <div class="login card-panel green white-text center">
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="login">
      Login
      <div class="input-field">
          <i class="material-icons prefix">email</i>
        <input type="email" v-model="email" />
        <label class="white-text" for="email">Email Address</label>
      </div>

      <div class="input-field">
          <i class="material-icons prefix">lock</i>
        <input type="password" v-model="password" />
        <label class="white-text" for="password">Password</label>
      </div>
      <button class="btn btn-large btn-extended grey lighten-4 black-text" type="submit">Login</button>
    </form>
    </div>
    </div>
    </div>
    </div>
  </div>

</template>

<script>

import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
            user =>{
          alert(`You are logged in as ${user.user.email}`);
          this.$router.go({path : this.$router.path})
      },
      err =>{
          alert(err.message)
      })
        .catch(error => (this.error = error));
    }
  }
};
</script>