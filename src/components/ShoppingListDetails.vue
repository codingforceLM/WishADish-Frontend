<template>
  <v-container>
    <v-layout row wrap align-end>
      <h1>{{singleShoppingList.name}}</h1>
        <v-btn
            icon
        >
          <v-icon style="horizontal-align: middle">mdi-format-list-bulleted-square</v-icon>
        </v-btn>

      <div class="break"></div>
          <v-checkbox
              v-model="singleShoppingList.done"
              label="Erledigt"
          ></v-checkbox>

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
          v-for="ingredients in singleShoppingList.ingredients" :key="ingredients.id"
      >

        <v-layout row wrap>

          <v-col>
            <v-list-item >
              <v-list-item-title >
                {{ ingredients.name }}
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col>
            <v-list-item >
            <v-list-item-title >
              {{ ingredients.amount }} {{ ingredients.unit }}
            </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col>
            <v-checkbox
                v-model="ingredients.done"
            ></v-checkbox>
          </v-col>
        </v-layout>

      </v-card>

    </v-layout>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ShoppingListDetails",
  methods: {
    ...mapActions(["fetchShoppingList"]),
  },
  computed: mapGetters(["singleShoppingList"]),

}
</script>

<style scoped>

</style>
