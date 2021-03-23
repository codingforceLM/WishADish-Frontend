<template>
  <v-container >
    <v-layout row wrap align-end @click="changeDetails">
      <v-date-picker
          v-model='date'
          full-width
          elevation="5"
          :events="getWishdates"
          event-color="green lighten-1"
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
    ...mapActions(["fetchUserWishDate","fetchUserWishMonth"]),
    changeDetails: function () {
      this.getWishdates()
      let month = this.date.substr(5,2)
      let day = this.date.substr(8,2)
      let year = this.date.substr(0,4)
      this.fetchUserWishDate({day,month,year})
    },
    getWishdates: function (date){
      let wishes = this.allUserWishMonth
      for(let i = 0; i<wishes.length; i++ ){
         if(wishes[i].day == date){
           return true
         }
      }
      return false
    }
  },
  computed: mapGetters(["allUserWishDate","allUserWishMonth"]),
  created() {
    let month = this.date.substr(5,2)
    let year = this.date.substr(0,4)
    this.fetchUserWishMonth({month,year})
  }
}
</script>

<style scoped>

</style>
