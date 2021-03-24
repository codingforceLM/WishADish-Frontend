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
import axios from 'axios';

export default {
  name: "Invite",
  data: () => ({
    snackbar: false,
    snackMsg: "",
  }),
  methods: {

  },
  created() {
    console.log(this.$route.params.id);
    axios.post('http://localhost:3000/api/invite/', {}, {
      headers: {
        inviteId: this.$route.params.id,
        userId: this.$store.getters.userId
      }
    }).then(resp => {
      // TODO add some kind of notification system
      console.log("user joined");
      if(this.$store.getters.userId === "") {
        this.$router.replace("/login")
        return;
      }
      const invId = this.$route.params.id
      console.log(invId);
      resp;
      this.$router.replace("/group")
    }).catch(error => {
      console.log(error);
      this.$router.replace("/group");
    });
  }
}
</script>

<style scoped>

</style>
