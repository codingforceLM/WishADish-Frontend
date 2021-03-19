<template>
  <v-container my-n5>
    <v-layout row wrap align-end>
      <div class="break"></div>
      <v-col align="start">
        <v-img height="250px" width="250px" src='https://i.etsystatic.com/10036582/r/il/fd9f8e/1296541546/il_570xN.1296541546_98xd.jpg'></v-img>
      </v-col>
      <v-col align="start">
        <v-card-title>Name</v-card-title>
        <v-card-title>Geburtsdatum</v-card-title>
        <v-card-title>Email</v-card-title>
      </v-col>
      <v-spacer></v-spacer><v-spacer></v-spacer>
      <div class="break"></div>
      <v-btn
          tile
      >
        <v-icon left>
          mdi-pencil
        </v-icon>
        Edit
      </v-btn>
    </v-layout>
  </v-container>

</template>

<script>
export default {
name: "ProfileLeft"
}
</script>

<style scoped>

</style>
