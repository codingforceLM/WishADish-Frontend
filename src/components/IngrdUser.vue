<template>
  <v-container>
    <v-layout row wrap align-end>
      <h1>Eigene Zutaten</h1>    <v-btn
        class="mx-2"
        dark
        color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
      <div class="break"></div>
      <v-col align="start">

        <v-btn
            text
        >
          <span>Filter</span>
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
      </v-col>
      <v-col align="start">

        <v-btn
            text
        >
          <span>Sortieren</span>
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
      </v-col>

      <div class="break"></div>
      <v-card
          width="100%"
          v-for="ingrd in allUserIngrd" :key="ingrd.id"
      >
        <v-layout row wrap no-gutters>

          <v-col>
            <v-card-title> {{ ingrd.name }}</v-card-title>
          </v-col>

          <v-col>
            <v-card-actions>
              <v-btn
                  icon
              >
                <v-icon dark>
                  mdi-format-list-bulleted-square
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>

        </v-layout>

      </v-card>

    </v-layout>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "IngrdUser",
  methods: {
    ...mapActions(["fetchUserIngrd"]),
  },
  computed: mapGetters(["allUserIngrd"]),
  created() {
    this.fetchUserIngrd()
  },
}
</script>

<style scoped>

</style>
