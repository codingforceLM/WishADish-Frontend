<template>
  <v-app fluid >
    <v-layout row justify-space-between >
      <v-col md="6" >
          <ProfileLeft />
      </v-col>
      <v-col md="6">
        <ProfileDishes />
      </v-col>
    </v-layout>
  </v-app>
</template>


<script>
import ProfileLeft from "@/components/ProfileLeft";
import ProfileDishes from "@/components/ProfileDishes";
export default {
name: "Profile",
  components: {ProfileDishes, ProfileLeft}
}
</script>

<style scoped>

</style>
