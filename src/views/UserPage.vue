<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="title__user"
          ><h1 class="my-3">{{ fullName }}</h1></v-col
        >
      </v-row>
      <v-row>
        <v-col class="col__center">
          <v-img
            class="image__box"
            :src="this.userVuex.results[0].picture.large"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col__center">
          <p>
            Oi, eu tenho
            {{ this.userVuex.results[0].registered.age }} anos
          </p>
        </v-col>
      </v-row>
      <v-row class="group__row">
        <v-col class="col__center">
          <p>
            E venho do(a) {{ this.userVuex.results[0].location.country }}
          </p></v-col
        >
      </v-row>
      <v-row class="col__center my-12">
        <v-btn @click="logout">Logout</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserService from '@/services/UserService'

export default {
  computed: {
    ...mapState(['user']),
    userVuex() {
      return this.$store.state.user
    },
    fullName() {
      if (this.userVuex.results) {
        return (
          this.userVuex.results[0].name.first +
          ' ' +
          this.userVuex.results[0].name.last
        )
      }
    },
  },
  methods: {
    logout() {
      UserService.getUser().then(
        (response) => (this.$store.state.user = response.data)
      )
    },
  },
}
</script>

<style scoped>
.title__user {
  text-align: center;
}
.image__box {
  max-height: 180px;
  max-width: 180px;
  padding-top: 0;
  margin-top: 0;
  border-radius: 50%;
}
.col__center {
  display: flex;
  justify-content: center;
}
.group__row {
  margin-top: 0;
}
</style>
