<template>
  <v-app fluid >
    <v-row class="pa-5">
      <v-col md="6" >
        <IngrdUser />
      </v-col>
      <v-col md="6">
        <IngrdDefault />
      </v-col>
    </v-row>
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
