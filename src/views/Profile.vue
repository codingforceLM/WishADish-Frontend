<template>
  <v-container fluid >
    <v-layout row justify-space-between >
      <v-col md="6" >
          <ProfileLeft></ProfileLeft>
      </v-col>
      <v-col md="6">
        <GroupDetails />
      </v-col>
    </v-layout>
  </v-container>
</template>


<script>
import ProfileLeft from "@/components/ProfileLeft";
export default {
name: "Profile",
  components: {ProfileLeft}
}
</script>

<style scoped>

</style>
