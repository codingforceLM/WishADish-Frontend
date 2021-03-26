<template>
  <v-container>
    <v-row wrap align-end>
      <h1>{{singleShoppingList.name}}</h1>
      <v-dialog
          v-model="dialog"
          max-width="60%"
          scrollable
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class="mx-2"
              dark
              color="indigo"
              v-bind="attrs"
              v-on="on"
          >
            <v-icon dark>
              mdi-format-list-bulleted-square
            </v-icon>
          </v-btn>

        </template>
        <v-card>
          <v-card-title>
            <span class="headline font-weight-bold">Einkaufsliste bearbeiten</span>
          </v-card-title>
          <v-container fluid>
            <v-row>
              <v-col
                  cols="12"
              >
                <v-text-field
                    label="Titel"
                    v-model="title"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="12"
              >
                <v-card
                    v-for="entry in entries" :key="entry.id"
                    class="my-1"
                >
                  <v-container>
                    <v-row
                        no-gutters
                    >
                      <v-col
                          cols="7"
                      >
                        <v-select
                            :items="ingredients"
                            label="Zutat"
                            item-text="name"
                            item-value="id"
                            v-model="entry.ingredient"
                        ></v-select>
                      </v-col>
                      <v-col
                          cols="2"
                      >
                        <v-text-field
                            label="Menge"
                            required
                            v-model="entry.amount"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="2"
                      >
                        <v-select
                            :items="units"
                            label="Einheit"
                            v-model="entry.unit"
                        ></v-select>
                      </v-col>
                      <v-col
                          cols="1"
                      >
                        <v-btn
                            class="mt-2"
                            dark
                            color="red"
                            @click="removeEntry(entry)"
                        >
                          <v-icon dark>
                            mdi-close
                          </v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
                <v-btn
                    class="mt-2"
                    dark
                    color="indigo"
                    @click="newEntry()"
                >
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </v-col>

            </v-row>

          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="saveList"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
          class="my-1"
      >

        <v-row wrap>

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
        </v-row>

      </v-card>

    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ShoppingListDetails",
  data: () => ({
    dialog: false,
    snackbar: false,
    snackMsg: "",
    ingredients: [],
    units: ["liter", "milliliter", "gramm", "kilogramm"],
    id: 1,
    title: "",
    entries: [{id: 1, ingredient: {id:"", name:""}, amount: "", unit: ""}]
  }),
  methods: {
    ...mapActions(["fetchShoppingList"]),
    async saveList() {
      //
    },
    newEntry() {
      //
    },
    removeEntry() {
      //
    }
  },
  computed: mapGetters(["singleShoppingList"]),

}
</script>

<style scoped>

</style>
