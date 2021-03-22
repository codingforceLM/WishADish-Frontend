<template>
  <v-app fluid >
    <v-row class="pa-5">
      <v-col md="6" >
        <ShoppingListList />
      </v-col>
      <v-col md="6">
        <ShoppingListDetails />
      </v-col>
    </v-row>
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
