<template>
  <v-app fluid >
    <v-row class="pa-5">
      <v-col md="6">
        <DishList />
      </v-col>
      <v-col md="6">
        <DishDetails />
      </v-col>
    </v-row>
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
