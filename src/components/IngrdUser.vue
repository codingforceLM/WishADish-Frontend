<template>
  <v-container>
    <v-row wrap align-end>
      <h1>Eigene Zutaten</h1>
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
            <span class="headline font-weight-bold">Zutat erstellen</span>
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
                @click="saveIngrd"
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
          v-for="ingrd in allUserIngrd" :key="ingrd.id"
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
  name: "IngrdUser",
  data: () => ({
    dialog: false,
    snackbar: false,
    snackMsg: "",
    title: "",
  }),
  methods: {
    ...mapActions(["fetchUserIngrd", "saveNewIngrd"]),
    async saveIngrd() {

      if(this.title === "") {
        this.snackMsg = "Notwendiges Feld nicht ausgefüllt!"
        this.snackbar = true;
        return;
      }

      const response = await this.saveNewIngrd(this.title);

      if(response) {
        this.snackMsg = "Zutat gespeichert!"
        this.snackbar = true;
        this.dialog = false;
        this.title = "";
      } else {
        this.snackMsg = "Zutat konnte nicht gespeichert werden!"
        this.snackbar = true;
      }
    }
  },
  computed: mapGetters(["allUserIngrd"]),
  created() {
    this.fetchUserIngrd()
  },
}
</script>

<style scoped>

</style>
