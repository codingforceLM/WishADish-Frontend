<template>
  <v-container>
    <v-row wrap align-end>
      <h1 @click="navDishes">Einkaufslisten</h1>
      <div class="break"></div>

      <v-card
          width="100%"
          v-for="group in allShoppingLists" :key="group.id"
          class="my-1"
      >
        <v-row wrap no-gutters>

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

        </v-row>

      </v-card>

    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "LpShoppingList",
  methods: {
    ...mapActions(["fetchShoppingListOpen"]),
  navDishes() {
    this.$router.push("/shoppinglist");
  }},
  computed: mapGetters(["allShoppingLists"]),
  created() {
    this.fetchShoppingListOpen()
  }}

</script>

<style scoped>

</style>
