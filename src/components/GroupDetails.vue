<template>
  <v-container>
    <v-row wrap align-end>
      <h1>Mitglieder</h1>
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
      <v-menu offset-y>
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
        <v-list>
          <v-list-item
              @click="dialog=true"
          >
            <v-list-item-title>Mitglieder einladen</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-dialog
          v-model="dialog"
          max-width="60%"
          scrollable
      >
        <v-card>
          <v-card-title>
            <span class="headline font-weight-bold">Einladungslink erstellen</span>
          </v-card-title>
          <v-container fluid>
            <v-row>
              <v-col
                  cols="10"
              >
                <v-text-field
                    label="Link"
                    v-model="link"
                    required
                    readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="2"
              >
                <v-btn
                    class="mt-2"
                    dark
                    color="blue"
                    @click="getInvite"
                >
                  Erstellen
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
          </v-card-actions>
        </v-card>
      </v-dialog>

      <div class="break"></div>
      <h2>{{singleGroup.name}}</h2>
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
          v-for="user in singleGroup.user" :key="user.id"
          class="my-1"
      >

        <v-row wrap>

          <v-col>

            <v-list-item >
              <v-list-item-avatar color="grey darken-3">
                <v-img
                    class="elevation-6"
                    alt=""
                    :src='user.fileurl'
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-title >
                {{ user.name }}
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col>
            <v-list-item >
            <v-list-item-title >
              {{ user.role }}
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
import axios from 'axios';

export default {
  name: "GroupDetails",
  data: () => ({
    dialog: false,
    snackbar: false,
    snackMsg: "",
    link: "",
  }),
  methods: {
    ...mapActions(["fetchGroup"]),
    async getInvite() {
      const response = await axios.get('http://localhost:3000/api/invite/', {
        headers: {
          groupId: this.$store.getters.singleGroup.id
        }
      });

      if(response.status === 400 || response.status === 404) {
        this.snackMsg = "Einladung konnte nicht erstellt werden!";
        this.snackbar = true;
        return;
      }

      this.link = "http://localhost:8080/invite/"+response.data.id;
      this.snackMsg = "Einladung erstellt!";
      this.snackbar = true;
    }
  },
  computed: mapGetters(["singleGroup"]),
  created() {

  },
}
</script>

<style scoped>

</style>
