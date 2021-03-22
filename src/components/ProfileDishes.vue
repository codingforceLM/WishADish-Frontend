<template>

  <v-container >
    <h1>Eigene Gerichte</h1>
    <div class="break"></div>
    <v-col />
    <v-row wrap>
      <v-card
          width="100%"
          v-for="dish in allDishes" :key="dish.id"
          class="my-1"
      >

        <v-row >
          <v-col>
            <v-list-item >
              <v-list-item-title >
                {{ dish.name }}
              </v-list-item-title>
            </v-list-item>
          </v-col>
        </v-row>

      </v-card>

    </v-row>
  </v-container>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
name: "ProfileDishes",
  methods: {
    ...mapActions(["fetchDishes"]),
  },
  computed: mapGetters(["allDishes"]),
  created() {
    this.fetchDishes()
  },
}
</script>


<style scoped>

</style>
