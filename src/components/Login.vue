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
              :rules="rules"
              hide-details="auto"
              outlined
          ></v-text-field>
          <v-text-field
              class="my-3"
              label="Password"
              :rules="rules"
              hide-details="auto"
              :type="'password'"
              outlined
          ></v-text-field>
          <v-btn class="my-3" block>
            Login
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>

</template>

<script>
  export default {
    name: 'Login',

    data: () => ({

    }),
  }
</script>

