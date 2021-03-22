<template>
  <v-app>
    <v-row justify="center">
      <v-col cols="4">
        <div
            class="text-h2 text-center my-2 font-weight-bold"
        >
          Registrierung
        </div>
        <span class="ma-1"></span>

        <v-alert
            color="red"
            dismissible
            prominent
            type="error"
            v-model="displayError"
        >
          {{errorMsg}}
        </v-alert>
        <v-text-field
            class="my-3"
            label="Vorname"
            hide-details="auto"
            outlined
            v-model="firstname"
        ></v-text-field>
        <v-text-field
            class="my-3"
            label="Nachname"
            hide-details="auto"
            outlined
            v-model="lastname"
        ></v-text-field>
        <v-date-picker
            v-model="birthday"
            full-width
        >
        </v-date-picker>
        <span class="ma-1"></span>

        <v-text-field
            class="my-3"
            label="Nutzername"
            hide-details="auto"
            outlined
            v-model="username"
        ></v-text-field>
        <v-btn
            class="my-3"
            block
            @click="checkAvailability"
        >
          Verfügbarkeit prüfen
        </v-btn>
        <v-text-field
            class="my-3"
            label="Profilbild URL"
            hide-details="auto"
            outlined
            v-model="fileurl"
        ></v-text-field>
        <span class="ma-1"></span>

        <v-text-field
            class="my-3"
            label="E-Mail"
            hide-details="auto"
            outlined
            v-model="email"
        ></v-text-field>
        <v-text-field
            class="my-3"
            label="Passwort"
            hide-details="auto"
            :type="'password'"
            outlined
            v-model="password"
        ></v-text-field>
        <span class="ma-1"></span>
        <v-checkbox
            v-model="checkbox"
            :label="`Ich habe die AGB gelesen und bin damit einverstanden.`"
        ></v-checkbox>
        <v-btn
            class="my-3"
            block
            @click="register"
        >
          Registrieren
        </v-btn>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data: () => ({
    displayError: false,
    errorMsg: "",
    checkbox: false,

    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    birthday: "",
    fileurl: ""
  }),
  methods: {
    async register() {
      if([this.firstname, this.lastname, this.username, this.email, this.password, this.birthday].includes("")) {
        this.errorMsg = "required field is empty"
        this.displayError = true;
        return;
      }

      if(!this.checkbox) {
        this.errorMsg = "Die AGBs müssen akzeptiert werden!";
        this.displayError = true;
        return;
      }

      const response = await axios.post('http://localhost:3000/api/user/', {}, {
        headers: {
          'email': this.email,
          'password': this.password,
          'firstname': this.firstname,
          'lastname': this.lastname,
          'username': this.username,
          'birthday': this.birthday,
          'fileurl': this.fileurl
        }
      });

      if(response.status === 400) {
        this.errorMsg = "Can't register";
      } else {
        this.$router.push("/login/");
      }
    },
    async checkAvailability() {}
  }
}
</script>

<style scoped>

</style>
