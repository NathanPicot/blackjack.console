// users.js
import {defineStore} from 'pinia';
import axios from '@/axios';
//const querystring = require('querystring');
// users.js
export const useUsersStore = defineStore('users', {
  id: 'users',
  state: () => ({
    users: [],
    user: null,
    // Add an errorMessage property to the state
    errorMessage: false,
  }),
  actions: {
    addUser(user) {
      this.$state.errorMessage = false;
      axios.post('/Joueur/add', user, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
          if (response.data.success) {
            this.$state.errorMessage = false;
          } else if (response.data.error) {

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

    loginUser(user) {
      this.$state.errorMessage = false;

      axios.post('/Joueur/login', user, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
          if (response.data.success) {
            // Stocke le token dans le localStorage
            localStorage.setItem('authToken', response.data.token);

            this.$state.errorMessage = false;
            this.$state.user = response.data.user;
          } else if (response.data.error) {
            this.$state.errorMessage = response.data.error;
            console.error('Erreur lors de la requête API:', response.data.error);
          }
        })
        .catch(error => {
          if (error.response && error.response.data.error) {
            this.$state.errorMessage = error.response.data.error;
            console.error('Erreur lors de la requête API:', error.response.data.error);
          } else {
            console.error('Erreur lors de la requête API', error);
          }
        });
    },

    loginByToken(token) {
      axios.post(`/Joueur/getByToken?token=${token}`, {token: token}, /*{headers: {'Content-Type': 'application/json'}}*/)
        .then(response => {
          if (response.data.success) {
            this.$state.errorMessage = false;
            this.$state.user = response.data.user;
          } else if (response.data.error) {
            this.$state.errorMessage = response.data.error;
            console.error('Erreur lors de la requête API:', response.data.error);
          }
        })
        .catch(error => {
          if (error.response && error.response.data.error) {
            this.$state.errorMessage = error.response.data.error;
            console.error('Erreur lors de la requête API:', error.response.data.error);
          } else {
            console.error('Erreur lors de la requête API', error);
          }
        });
    },

    logout() {
      // Effacez l'utilisateur à la déconnexion
      this.user = null;
      localStorage.removeItem('authToken');
    },

    UpdateMoney(user) {
      this.$state.errorMessage = false;
      axios.post('/Joueur/UpdateMoney', user, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
          if (response.data.success) {
            this.$state.errorMessage = false;
          } else if (response.data.error) {

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
  getters: {
    isLoggedIn: (state) => {
      // Check if the user data exist
      return !!state.user;
    },
    IdUser: (state) => {
      return state.user.iD_joueur
    },

    getUserMoney: (state) => {
      return state.user.argent;
    }
  }
});