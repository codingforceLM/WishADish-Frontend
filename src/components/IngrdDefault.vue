<template>
  <v-container>
    <v-row wrap align-end>
      <h1>Standard Zutaten</h1>
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
          v-for="ingrd in systemIngrd" :key="ingrd.id"
          class="my-1"
      >
        <v-row wrap no-gutters>

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

        </v-row>

      </v-card>

    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "IngrdDefault",
  methods: {
    ...mapActions(["fetchDeufaultIngrd"]),
  },
  computed: mapGetters(["systemIngrd"]),
  created() {
    this.fetchDeufaultIngrd()
  },
}
</script>

<style scoped>

</style>
