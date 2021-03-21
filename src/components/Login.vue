<template>
  <v-container>
    <div id="content">
      <v-row justify="center">
        <v-col cols="4">
          <v-img
              :src="require('../assets/wishdishlogo.png')"
              contain
              height="400"
          />
          <v-btn class="my-3" block >
            <v-icon>mdi-facebook</v-icon>
            <v-spacer></v-spacer>
            Sign-In with facebook
          </v-btn>
          <v-btn class="my-3" block>
            <v-icon>mdi-apple</v-icon>
            <v-spacer></v-spacer>
            Sign-In with apple
          </v-btn>

          <v-btn class="my-3" block>
            <v-icon>mdi-google</v-icon>
            <v-spacer></v-spacer>
            Sign-In with google
          </v-btn>
          <span class="ma-2"></span>
          <v-text-field
              class="my-3"
              label="E-Mail"
              hide-details="auto"
              outlined
              v-model="email"
          ></v-text-field>
          <v-text-field
              class="my-3"
              label="Password"
              hide-details="auto"
              :type="'password'"
              outlined
              v-model="password"
          ></v-text-field>
          <v-btn
              class="my-3"
              block
              @click="logUserIn"
          >
            Login
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>

</template>

<script>

import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'Login',

    data: () => ({
      email: '',
      password: ''
    }),
    methods: {
      ...mapActions(["login", "logout"]),
      async logUserIn() {
        try {
          console.log("email: "+this.email);
          console.log("password: "+this.password);
          const loggedIn = await this.login({email: this.email, password: this.password});

          if(loggedIn) {
            this.$router.push("/");
          } else {
            // TODO do some error messaging stuff
            console.log("haha fucker try again");
          }
        } catch(e) {
          console.log(e);
        }
      }
    },
    computed: mapGetters(["token", "user"]),
  }
</script>

