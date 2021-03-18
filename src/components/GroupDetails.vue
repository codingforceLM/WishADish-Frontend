<template>
  <v-container my-n5>
    <v-layout row wrap align-end>
      <h1>Mitglieder</h1>
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
      >

        <v-layout row wrap>

          <v-col>

            <v-list-item >
              <v-list-item-avatar color="grey darken-3">
                <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
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
          <v-spacer></v-spacer>
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
        </v-layout>

      </v-card>

    </v-layout>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "GroupDetails",
  methods: {
    ...mapActions(["fetchGroup"]),
  },
  computed: mapGetters(["singleGroup"]),
  created() {

  },

}
</script>

<style scoped>
.break {
  flex-basis: 100%;
  height: 0;
}
</style>
