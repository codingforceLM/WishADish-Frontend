<template>
  <v-container>
    <v-row wrap align-end>
      <h1 v-if="allUserWishDate[0]!=undefined">{{allUserWishDate[0].day}}</h1>
      <div class="break"></div>
      <v-card
          width="100%"
          v-for="wish in allUserWishDate" :key="wish.id"
          class="my-1"
      >

        <v-row wrap>
          <v-col>

              <v-card-title class="v-card__title">
                {{ wish.daytime }}
              </v-card-title>
            <v-card class="ma-2">
              <v-card-title >
                  {{ wish.name }}
              </v-card-title>
                <v-card-subtitle >
                  {{ wish.groupname }}
                </v-card-subtitle>
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
