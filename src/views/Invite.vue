<template>
  <v-app>
    <v-container fill-height fluid>
      <v-row align="center"
             justify="center">
        <v-col
          align="center"
          justify="center"
        >
          <v-progress-circular
              :size="70"
              :width="7"
              color="purple"
              indeterminate
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import {mapActions} from "vuex";
import axios from 'axios';

export default {
  name: "Invite",
  data: () => ({
    snackbar: false,
    snackMsg: "",
  }),
  methods: {
    ...mapActions(["updateNotification"])
  },
  async created() {
    console.log(this.$route.params.id);
    const response = await axios.post('http://localhost:3000/api/invite/', {}, {
      headers: {
        inviteId: this.$route.params.id,
        userId: this.$store.getters.userId
      }
    });
    if(response.status < 200 || response.status > 299 ) {
      console.log(response);
      //this.updateNotification({s: true, m: "Konnte Gruppe nicht beitreten!"});
      this.$router.replace("/group");
      return;
    }

    console.log("user joined");
    if(this.$store.getters.userId === "") {
      //this.updateNotification({s: true, m: "Nicht eingeloggt!"});
      this.$router.replace("/login")
      return;
    }
    const invId = this.$route.params.id
    console.log(invId);
    //this.updateNotification({s: true, m: "Gruppe beigetreten!"});
    this.$router.replace("/group")
  }
}
</script>

<style scoped>

</style>
