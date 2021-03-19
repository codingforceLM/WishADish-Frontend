<template>
  <v-container fluid >
    <v-layout row justify-space-between >
      <v-col md="6" >
        <GroupList />
      </v-col>
      <v-col md="6">
        <GroupDetails />
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>

import GroupList from "@/components/GroupList";
import GroupDetails from "@/components/GroupDetails";

export default {
  name: "Group",
  components: {GroupDetails, GroupList}
}
</script>

<style scoped>

</style>
