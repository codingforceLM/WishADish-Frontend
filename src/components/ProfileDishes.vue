<template>

  <v-container >
    <h1>Eigene Gerichte</h1>
    <div class="break"></div>
    <v-col />
    <v-layout row wrap>
      <v-card
          width="100%"
          v-for="dish in allUserDishes" :key="dish.id"
      >

        <v-layout row>
          <v-col>
            <v-list-item >
              <v-list-item-title >
                {{ dish.name }}
              </v-list-item-title>
            </v-list-item>
          </v-col>
        </v-layout>

      </v-card>

    </v-layout>
  </v-container>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
name: "ProfileDishes",
  methods: {
    ...mapActions(["fetchDishes"]),
  },
  computed: mapGetters(["allUserDishes"]),
  created() {
    this.fetchDishes()
  },
}
</script>


<style scoped>

</style>
