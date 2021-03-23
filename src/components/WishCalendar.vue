<template>
  <v-container >
    <v-layout row wrap align-end @click="changeDetails">
      <v-date-picker
          v-model='date'
          full-width
          elevation="5"
      ></v-date-picker>
    </v-layout>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "WishCalendar",
  data:() => ({
    date: new Date().toISOString().substr(0, 10),
  }),
  methods: {
    ...mapActions(["fetchUserWishDate"]),
    changeDetails: function () {
      let day = this.date.substr(5,2)
      let month = this.date.substr(8,2)
      let year = this.date.substr(0,4)
      this.fetchUserWishDate({day,month,year})
    }
  },
  computed: mapGetters(["allUserWishDate"]),
}
</script>

<style scoped>

</style>
