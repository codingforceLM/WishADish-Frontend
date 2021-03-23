<template>
  <v-app fluid >
    <v-row class="pa-5" >
      <v-col md="6" >
        <WishCalendar />
      </v-col>
      <v-col md="6">
      <WishDetails />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>



import WishCalendar from "@/components/WishCalendar";
import WishDetails from "@/components/WishDetails";
export default {
  name: "Group",
  components: {WishDetails, WishCalendar},
}
</script>

<style scoped>

</style>
