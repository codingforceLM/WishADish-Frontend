<template>
  <v-container>
    <v-row wrap align-end>
      <h1>{{singleDish.name}}</h1>
      <v-btn
          icon
      >
        <v-icon dark>
          mdi-format-list-bulleted-square
        </v-icon>
      </v-btn>
      <div class="break"></div>
      <h2>Zutatenliste</h2>
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
          v-for="dish in singleDish.ingredients" :key="dish.id"
          class="my-1"
      >

        <v-row wrap>

          <v-col>

            <v-list-item >
              <v-list-item-title >
                {{ dish.name }}
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col>
            <v-list-item >
            <v-list-item-title >
              {{ dish.amount  }} {{ dish.unit  }}
            </v-list-item-title>
            </v-list-item>
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
  name: "DishDetails",
  methods: {
    ...mapActions(["fetchDish"]),
  },
  computed: mapGetters(["singleDish"]),

}
</script>

<style scoped>

</style>
