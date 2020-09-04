<template>
  
  <div>
      <div class="container">
          <div class="row">
              <div class="col s12 m8 offset-m2">
                  <div class="login card-panel gray black-text center">
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="register">
      Register
      <div class="input-field">
          <i class="material-icons prefix">email</i>
        <input type="email" v-model="email" />
        <label for="email">Email Address</label>
      </div>

      <div class="input-field">
          <i class="material-icons prefix">lock</i>
        <input type="password" v-model="password"  />
        <label for="password">Password</label>
      </div>
      <button class="btn btn-large btn-extended grey lighten-4 black-text" type="submit">Register</button>
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
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
            user =>{
          alert(`user created for ${user.user.email}`);
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