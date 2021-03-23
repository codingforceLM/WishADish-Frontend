<template>
  <v-container>
    <v-row wrap align-end>
      <h1>Einkaufslisten</h1>
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
                  cols="7"
              >
                <v-text-field
                    label="Titel"
                    v-model="title"
                    required
                ></v-text-field>
              </v-col>
              <v-col
                  cols="5"
              >
                <v-select
                    :items="groups"
                    label="Gruppe"
                    item-text="_title"
                    item-value="_id"
                    v-model="group"
                ></v-select>
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
                @click="saveNewList"
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
          v-for="group in allShoppingLists" :key="group.id"
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
  name: "ShoppingListList",
  data: () => ({
    dialog: false,
    snackbar: false,
    snackMsg: "",
    groups: [],
    title: "",
    group: ""
  }),
  methods: {
    ...mapActions(["fetchShoppingLists", "fetchShoppingList", "fetchUserGroups", "saveNewShoppingList"]),
    changeDetails: function (id) {
      this.fetchShoppingList(id)
      console.log(id)
    },
    async saveNewList() {
        if([this.title, this.group].includes("")) {
          this.snackMsg = "Notwendiges Feld nicht ausgefüllt";
          this.snackbar = true;
          return;
        }
      const response = await this.saveNewShoppingList({title: this.title, groupId: this.group});
      if(response) {
        this.snackMsg = "Einkaufsliste gespeichert!"
        this.snackbar = true;
        this.dialog = false;
        this.title = "";
        this.group = "";
      } else {
        this.snackMsg = "Einkaufsliste konnte nicht gespeichert werden!"
        this.snackbar = true;
      }
    }
  },
  computed: mapGetters(["allShoppingLists", "singleShoppingList"]),
  created() {
    this.fetchShoppingLists();
    this.fetchUserGroups();
    this.groups = this.$store.getters.groups
  },
}
</script>

<style scoped>

</style>
