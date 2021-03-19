<template>
  <v-container>
    <v-layout row justify-start>
      <div class="break"></div>
      <v-col align="start" >
        <v-img height="250px" width="250px" :src='singleUser.fileurl'></v-img>
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
