<template>
  <v-container>
    <v-row wrap align-end>
      <h1>{{singleShoppingList.name}}</h1>
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
          persistent
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class="mx-2"
              dark
              color="indigo"
              v-bind="attrs"
              v-on="on"
              @click="fillData"
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
                  cols="10"
              >
                <v-text-field
                    label="Titel"
                    v-model="title"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-switch
                    v-model="sldone"
                    label='Fertig'
                ></v-switch>
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
                          cols="5"
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
                        cols="2"
                      >
                        <v-switch
                            v-model="entry.done"
                            label='in Besitz'
                        ></v-switch>
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
                @click="closeList"
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
    sldone: false,
    entries: [],
    entriesCopy: [],
  }),
  methods: {
    ...mapActions(["fetchShoppingList", "fetchUserIngrd", "fetchDeufaultIngrd", "fetchAssociatedIngrd", "saveEditedShoppingList"]),
    async saveList() {
      let sl = {
        id: this.singleShoppingList.id,
        ingredients: []
      };
      console.log(this.entries);

      if([this.title, this.sldone].includes("")) {
        this.snackMsg = "Notwendiges Feld nicht ausgefüllt!";
        this.snackbar = true;
        return;
      }

      for(let i=0;i<this.entries.length;i++) {

        if([entry.ingredient, entry.amount, entry.unit, entry.done].includes("")) {
          this.snackMsg = "Notwendiges Feld nicht ausgefüllt!";
          this.snackbar = true;
          return;
        }

        let entry = this.entries[i];
        sl.ingredients.push({
          id: entry.ingredient,
          amount: entry.amount,
          unit: entry.unit,
          done: entry.done
        });
      }

      console.log(sl);

      const response = await this.saveEditedShoppingList({shoppinglist: sl, name: this.title, done: this.sldone});
      if(response) {
        this.snackMsg = "Einkaufsliste aktualisiert!";
        this.snackbar = true;
        this.dialog = false;
      } else {
        this.snackMsg = "Einkaufsliste konnte nicht aktualisiert werden!";
        this.snackbar = true;
      }
    },
    closeList() {
      this.entries = this.entriesCopy;
      this.dialog = false;
    },
    newEntry() {
      this.entries.push({
            id: this.id,
            ingredient: "",
            amount: "",
            unit: "",
            done: false,
      });
      this.id++;
    },
    removeEntry(entry) {
      let index = this.entries.indexOf(entry);
      this.entries.splice(index, 1);
    },
    fillData() {
      const sli = this.singleShoppingList.ingredients;
      this.entries = [];
      for(let i=0;i<sli.length;i++) {
        let ingrd = sli[i];
        this.entries.push({
          id: this.id,
          ingredient: ingrd.id,
          amount: ingrd.amount,
          unit: ingrd.unit,
          done: ingrd.done,
        });
        this.id++;
      }
      this.title = this.singleShoppingList.name;
      this.sldone = this.singleShoppingList.done;

      this.entriesCopy = this.entries;
      console.log(this.entries);
    }
  },
  computed: mapGetters(["singleShoppingList", "allUserIngrd", "systemIngrd", "associatedIngrd"]),
  async created () {
    this.fetchUserIngrd();
    this.fetchDeufaultIngrd();
    await this.fetchAssociatedIngrd()
    this.ingredients = this.$store.getters.associatedIngrd
    this.ingredients = this.ingredients.concat(this.$store.getters.systemIngrd)
  }
}
</script>

<style scoped>

</style>
