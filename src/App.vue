<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(route, index) in filteredRoutes" :key="index" @click="navigateTo(route.path)">
            <v-list-item-content>{{ route.viewName }}</v-list-item-content>
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
import {computed, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useUsersStore} from "@/store/UserStore";

const filteredRoutes = computed(() => {
  if (!localStorage.getItem('authToken')) {
    return autoRoutes.filter(route => !route.meta.requiresAuth);
  }
  useUsersStore().loginByToken(localStorage.getItem('authToken'))
  return autoRoutes.filter(route => route.meta.requiresAuth);
});

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