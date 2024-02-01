// users.js
import { defineStore } from 'pinia';
import axios from '@/axios';
//const querystring = require('querystring');
// users.js
export const useUsersStore = defineStore('users', {
  id: 'users',
  state: () => ({
    users: [],
    // Add an errorMessage property to the state
    errorMessage: false,
  }),
  actions: {
    addUser(user) {
      this.$state.errorMessage = false;
      axios.post('/Joueur/add', user, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
          if (response.data.success) {
            console.log(response.data.success);
            this.$state.errorMessage = false;
            this.$state.users.push(user);
          }else if (response.data.error) {

            // Update the errorMessage property on error
            this.$state.errorMessage = response.data.error;
            console.error('Erreur lors de la requête API:', response.data.error);
          }
        })
        .catch(error => {
          if (error.response && error.response.data.error) {
            // Update the errorMessage property on error
            this.$state.errorMessage = error.response.data.error;
            console.error('Erreur lors de la requête API:', error.response.data.error);
          } else {
            console.error('Erreur lors de la requête API', error);
          }
        });
    },
  },
});