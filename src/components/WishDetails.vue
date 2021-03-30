<template>
  <v-container>
    <v-row wrap align-end>
      <h1 v-if="selectedDate!=undefined">{{selectedDate}}</h1>
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
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>

        </template>
        <v-card>
          <v-card-title>
            <span class="headline font-weight-bold">Gericht wünschen</span>
          </v-card-title>
          <v-container fluid>
            <v-row>
              <v-col
                cols="12"
              >
                <v-select
                    :items="allDishes"
                    label="Gericht"
                    item-text="name"
                    item-value="id"
                    v-model="dish"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="12"
              >
                <v-select
                    :items="daytime"
                    label="Tageszeit"
                    v-model="dt"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="12"
              >
                <v-select
                    :items="allGroups"
                    label="Gruppe"
                    item-text="title"
                    item-value="id"
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
                @click="closeDialog"
            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="saveWish"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div class="break"></div>
      <v-card
          width="100%"
          v-for="wish in allUserWishDate" :key="wish.id"
          class="my-1"
      >

        <v-row wrap>
          <v-col>

              <v-card-title>
                {{ wish.daytime }}
              </v-card-title>
            <v-card class="ma-2">
              <v-card-title >
                  {{ wish.name }}
              </v-card-title>
                <v-card-subtitle >
                  {{ wish.groupname }}
                </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "WishDetails",
  data: () => ({
    dialog: false,
    snackbar: false,
    snackMsg: "",
    daytime: ["morning", "lunch", "evening"],
    dt: "",
    dish: "",
    group: "",
  }),
  methods: {
    ...mapActions(["fetchUserWishToday", "fetchDishes", "fetchGroups", "saveNewWish"]),
    async saveWish() {
      if([this.dt, this.dish, this.group].includes("")) {
        this.snackMsg = "Notwendiges Feld nicht ausgefüllt!";
        this.snackbar = true;
        return;
      }

      const response = await this.saveNewWish({daytime: this.dt, dish: this.dish, group: this.group, date: this.selectedDate});
      if(response) {
        this.snackMsg = "Wish saved!";
        this.snackbar = true;
        this.closeDialog();
      } else {
        this.snackMsg = "Couldnt save wish";
        this.snackbar = true;
      }
    },
    async closeDialog() {
      this.dialog = false;
      this.dt = "";
      this.group = "";
      this.dish = "";
    }
  },
  computed: mapGetters(["allUserWishDate","selectedDate", "allDishes", "allGroups"]),
  created() {
    this.fetchUserWishToday();
    this.fetchDishes();
    this.fetchGroups();
  },


}
</script>

<style scoped>

</style>
