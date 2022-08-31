<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        ><v-btn rounded text exact :to="{ name: 'home' }"
          >ESTUDOS DE VUE.JS</v-btn
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn class="hidden-md-and-down" rounded text :to="{ name: 'register' }"
        >REGISTER</v-btn
      >
      <v-btn text rounded>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      class="hidden-md-and-up"
      v-model="drawer"
      absolute
      temporary
      ><v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click.stop="drawer = !drawer">
            <v-list-item-title
              ><v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
              ></v-app-bar-nav-icon
            ></v-list-item-title>
          </v-list-item>

          <v-list-item exact :to="{ name: 'home' }">
            <v-list-item-title> HOME</v-list-item-title>
          </v-list-item>

          <v-list-item exact :to="{ name: 'register' }">
            <v-list-item-title> REGISTER</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list></v-navigation-drawer
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
}
</script>

<style scoped></style>
