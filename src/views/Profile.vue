<template>
  <v-container fluid >
    <v-layout row justify-space-between >
      <v-col md="6" >
          <ProfileLeft />
      </v-col>
      <v-col md="6">
        <ProfileGroup />
      </v-col>
    </v-layout>
  </v-container>
</template>


<script>
import ProfileLeft from "@/components/ProfileLeft";
import ProfileGroup from "@/components/ProfileGroup";
export default {
name: "Profile",
  components: {ProfileGroup, ProfileLeft}
}
</script>

<style scoped>

</style>
