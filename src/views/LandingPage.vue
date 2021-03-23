<template>
  <v-app fluid >
    <v-row class="pa-5" >
      <v-col md="6" >
        <LpWish />
      </v-col>
      <v-col md="6">
        <LpShoppingList />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>



import LpWish from "@/components/LpWish";
import LpShoppingList from "@/components/LpShoppingList";
export default {
  name: "LandingPage",
  components: {LpShoppingList, LpWish},
}
</script>

<style scoped>

</style>
