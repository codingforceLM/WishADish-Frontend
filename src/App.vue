<template>
  <v-app>
    <v-app-bar
        color="deep-purple"
        dark
    >

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-img
          :src="require('./assets/logo_sl.png')"
          max-height="60"
          max-width="120"
          contain
          @click='$router.push("/")'
      >
      </v-img>
      <v-btn
          v-if="$store.getters.token == ''"
          text
          class="v-card__title"
          @click='$router.push("/login")'
      >
        <v-icon>Login</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="$store.getters.token != ''" @click="logout" text class="v-card__title">
        <v-icon>Logout</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item>
          <img
              :src="require('./assets/wishdishlogo.png')"
              height="150"
              width="200"
          >
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.route"
              link
              color="#34924f"
          >
            <v-list-item-icon>
              <v-icon color="#c3ccd9">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="greyTxt">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {title: 'Home', icon: 'mdi-home', route: '/'},
      {title: 'Profil', icon: 'mdi-account', route: '/profile'},
      {title: 'Gruppen', icon: 'mdi-account-multiple', route: '/group'},
      {title: 'Wünsche', icon: 'mdi-star-box', route: '/wish'},
      {title: 'Einkausflisten', icon: 'mdi-format-list-checkbox', route: '/shoppinglist'},
      {title: 'Gerichte', icon: 'mdi-clipboard-text-outline', route: '/dish'},
      {title: 'Zutaten', icon: 'mdi-food-apple', route: '/ingrd'},
    ]
  }),
  methods: {
    logout: function () {
      this.$store.replaceState({
        group: {
          groupList: [],
          group: {}
        },
        user: {user: {}},
        ingrd: {
          userIngrd: [],
          singleIngrd: {},
          systemIngrd: []
        },
        dish: {
          userDish: [],
          singleDish: {}
        },
        wish: {
          userWishDate: [],
          userWishMonth: [],
          selectedDate: ""
        },
        authentication: {
          userId: '',
          token: ''
        },
        shoppinglist: {
          userList: [],
          list: {}
        }
      });
      this.$router.push("/login")
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.break {
  flex-basis: 100%;
  height: 0;
}
</style>
