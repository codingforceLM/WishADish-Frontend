<template>
  <v-app fluid >
    <v-layout row justify-space-between >
      <v-col md="6" >
        <IngrdUser />
      </v-col>
      <v-col md="6">
        <IngrdDefault />
      </v-col>
    </v-layout>
  </v-app>
</template>

<script>
import IngrdUser from "@/components/IngrdUser";
import IngrdDefault from "@/components/IngrdDefault";
export default {
name: "Ingrd",
  components: {IngrdDefault, IngrdUser}
}
</script>

<style scoped>

</style>
