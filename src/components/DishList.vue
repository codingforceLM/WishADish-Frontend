<template>
  <v-container>
    <v-row wrap align-end>
      <h1>Eigene Gerichte</h1>
      <v-snackbar
          v-model="snackbar"
          :timeout="2000"
      >
        {{ snackMsg }}

        <template v-slot:action="{ attrs }">
          <v-btn
              color="pink"
              text
              v-bind="attrs"
              @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
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
              mdi-plus
            </v-icon>
          </v-btn>

        </template>
        <v-card>
          <v-card-title>
            <span class="headline font-weight-bold">Gericht erstellen</span>
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
                @click="saveDish"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
          v-for="group in allDishes" :key="group.id"
          @click="changeDetails(group.id)"
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
  name: "DishList",
  data: () => ({
    dialog: false,
    snackbar: false,
    snackMsg: "",
    ingredients: [],
    units: ["l", "ml", "g", "kg", "Stk."],
    id: 1,
    title: "",
    entries: [{id: 1, ingredient: {id:"", name:""}, amount: "", unit: ""}]
  }),
  methods: {
    ...mapActions(["fetchDishes", "fetchDish", "fetchDeufaultIngrd", "fetchUserIngrd", "saveNewDish"]),
    changeDetails: function (id) {
      this.fetchDish(id)
      console.log(id)
    },
    removeEntry(entry) {
      let index = this.entries.indexOf(entry);
      this.entries.splice(index, 1);
    },
    newEntry() {
      ++this.id;
      this.entries.push({id: this.id, ingredient: {id:"", name:""}, amount: "", unit: ""})
    },
    async saveDish() {
      if(this.entries.length === 0) {
        this.snackMsg = "Du musst mindestens eine Zutat wählen!";
        this.snackbar = true;
        return;
      }
      for(let i=0;i<this.entries.length;i++) {
        if([this.entries[i].id, this.entries[i].amount, this.entries[i].unit].includes("")) {
          this.snackMsg = "Notwendiges Feld nicht ausgefüllt";
          this.snackbar = true;
          return;
        }
      }
      console.log(this.entries)
      const response = await this.saveNewDish({title: this.title, entries: this.entries});
      if(response) {
        this.snackMsg = "Gericht gespeichert!"
        this.snackbar = true;
        this.dialog = false;
      } else {
        this.snackMsg = "Gericht konnte nicht gespeichert werden!"
        this.snackbar = true;
      }
    }
  },
  computed: mapGetters(["allDishes", "singleDish", "allUserIngrd", "systemIngrd"]),
  created() {
    this.fetchDishes()
    this.fetchDeufaultIngrd()
    this.fetchUserIngrd()
    this.$store.commit('setSingleDish', [])
    this.ingredients = this.$store.getters.allUserIngrd
    this.ingredients.concat(this.$store.getters.systemIngrd)
  },
}
</script>

<style scoped>

</style>
