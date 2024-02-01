<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(route, index) in autoRoutes" :key="index" @click="navigateTo(route.path)">
            <v-list-item-content>{{ route.name }}</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import autoRoutes from './router/autoRoutes';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const drawer = ref(true);

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style scoped>
.v-list-item-group .v-list-item.router-link-exact-active {
  color: #42b983;
}
</style>