<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer">
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
    <v-toolbar-side-icon @click.native.stop="drawer = !drawer"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ title }}
        </router-link>
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer fixed>
      <span>{{ title }} &copy; 2017</span>
    </v-footer>
  </v-app>  
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { icon: 'bubble_chart', title: 'First', link: '/first' },
          { icon: 'bubble_chart', title: 'Second', link: '/second' },
          { icon: 'bubble_chart', title: 'Third', link: '/third' }
        ],
        title: 'Vue-Vuetify'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
