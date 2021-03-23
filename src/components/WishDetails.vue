<template>
  <v-container>
    <v-row wrap align-end>
      <h1 v-if="allUserWishDate[0]!=undefined">{{allUserWishDate[0].day}}</h1>
      <div class="break"></div>

      <v-col align="start" >

        <v-btn
            icon
            disabled
            elevation="0"
        >
        </v-btn>
      </v-col>
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
  name: "WishDetails",
  methods: {
    ...mapActions(["fetchUserWishToday",]),
  },
  computed: mapGetters(["allUserWishDate"]),
  created() {
    this.fetchUserWishToday()
  },

}
</script>

<style scoped>

</style>
