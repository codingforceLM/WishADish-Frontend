<template>
  <v-container>
    <v-layout row wrap align-end>
      <h1>Gruppen</h1>
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
          v-for="group in allGroups" :key="group.id"
          @click="changeDetails(group.id)"
      >
        <v-layout row wrap no-gutters>

          <v-col>
            <v-card-title> {{ group.title }}</v-card-title>
            <v-card-text>Erstellt am {{ group.creation }}</v-card-text>
          </v-col>
          <v-spacer />
          <v-spacer />
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
  name: "GroupList",
  methods: {
    ...mapActions(["fetchGroups", "fetchGroup"]),
    changeDetails: function (id) {
      this.fetchGroup(id)
      console.log(id)
    }
  },
  computed: mapGetters(["allGroups", "singleGroup"]),
  created() {
    this.fetchGroups()
  },
}
</script>

<style scoped>

</style>
