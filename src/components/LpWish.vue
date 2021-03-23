<template>
  <v-container>
    <v-row wrap align-end>
      <h1 @click="navWishes">Gerichte Heute</h1>
      <div class="break"></div>
      <v-card
          width="100%"
          v-for="wish in allUserWishDate" :key="wish.id"
          class="my-1"
      >

        <v-row wrap>
          <v-col>
            <v-list-item >
              <v-list-item-title class="v-card__title">
                {{ wish.daytime }}
              </v-list-item-title>
            </v-list-item>
            <v-card class="ma-2">
              <v-list-item >
                <v-list-item-title class="v-card__title">
                  {{ wish.name }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item >
                <v-list-item-title class="v-card__title">
                  {{ wish.groupname }}
                </v-list-item-title>
              </v-list-item>
            </v-card>
          </v-col>

        </v-row>

      </v-card>

    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "LpWish",
  methods: {
    ...mapActions(["fetchUserWishToday",]),
  navWishes() {
    this.$router.push("/dish");
  }},
  computed: mapGetters(["allUserWishDate"]),
  created() {
    this.fetchUserWishToday()
  },

}
</script>

<style scoped>

</style>
