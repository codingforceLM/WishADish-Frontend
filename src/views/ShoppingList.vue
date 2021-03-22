<template>
  <v-app fluid >
    <v-layout row justify-space-between >
      <v-col md="6" >
        <ShoppingListList />
      </v-col>
      <v-col md="6">
        <ShoppingListDetails />
      </v-col>
    </v-layout>
  </v-app>
</template>

<script>


import ShoppingListList from "@/components/ShoppingListList";
import ShoppingListDetails from "@/components/ShoppingListDetails";
export default {
  name: "ShoppingList",
  components: {ShoppingListDetails, ShoppingListList},
}
</script>

<style scoped>

</style>
