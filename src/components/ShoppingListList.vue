<template>
  <v-container>
    <v-layout row wrap align-end>
      <h1>Einkaufslisten</h1>
      <v-btn
          icon
      >
        <v-icon>mdi-plus</v-icon>
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
          v-for="group in allShoppingLists" :key="group.id"
          @click="changeDetails(group.id)"
      >
        <v-layout row wrap no-gutters>

          <v-col>
            <v-card-title> {{ group.name }}</v-card-title>
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
  name: "ShoppingListList",
  methods: {
    ...mapActions(["fetchShoppingLists", "fetchShoppingList"]),
    changeDetails: function (id) {
      this.fetchShoppingList(id)
      console.log(id)
    }
  },
  computed: mapGetters(["allShoppingLists", "singleShoppingList"]),
  created() {
    this.fetchShoppingLists()
  },
}
</script>

<style scoped>

</style>
