<template>
  <v-app fluid >
    <v-layout row justify-space-between >
      <v-col md="6" >
        <DishList />
      </v-col>
      <v-col md="6">
        <DishDetails />
      </v-col>
    </v-layout>
  </v-app>
</template>

<script>



import DishList from "@/components/DishList";
import DishDetails from "@/components/DishDetails";
export default {
  name: "Dish",
  components: {DishDetails, DishList}
}
</script>

<style scoped>

</style>
