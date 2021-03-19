<template>
  <v-container my-n5>
    <v-layout row justify-start>
      <div class="break"></div>
      <v-col align="start" >
        <v-img height="250px" width="250px" src='https://i.etsystatic.com/10036582/r/il/fd9f8e/1296541546/il_570xN.1296541546_98xd.jpg'></v-img>
      </v-col>
      <v-col align="start" >
        <v-card-title>Name: {{singleUser.firstname}} {{singleUser.lastname}}</v-card-title>
        <v-card-title>Geburtsdatum: {{singleUser.birthdate}}</v-card-title>
        <v-card-title>Email: {{singleUser.email}}</v-card-title>
      </v-col>

      <div class="break"></div>
      <v-col align="start">
        <v-btn
            tile
        >
          <v-icon left>
            mdi-pencil
          </v-icon>
          Bearbeiten
        </v-btn>
      </v-col>
    </v-layout>
  </v-container>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
name: "ProfileLeft",
  methods: {
    ...mapActions(["fetchUser"]),
  },
  computed: mapGetters(["singleUser"]),
  created() {
    this.fetchUser()
  },
}
</script>


<style scoped>

</style>
