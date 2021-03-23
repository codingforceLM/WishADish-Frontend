<template>
  <v-app fluid >
    <v-row class="pa-5" >
      <v-col md="6" >
        <GroupList />
      </v-col>
      <v-col md="6">
        <GroupDetails />
      </v-col>
    </v-row>
  </v-app>
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
