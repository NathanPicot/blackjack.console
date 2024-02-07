// PartieStore.js

import {defineStore} from 'pinia';
import axios from '@/axios';
//const querystring = require('querystring');
// users.js
export const usePartieStore = defineStore('partie', {
  id: 'partie',
  state: () => ({
    parties: [],
    partie: null,
    // Add an errorMessage property to the state
    errorMessage: false,
  }),
  actions: {
    createPartie(partie) {

      this.$state.errorMessage = false;

      axios.post('/Partie/add', partie, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
          if (response.data.success) {
            console.log(response.data.success);
            this.$state.errorMessage = false;
            this.$state.partie = response.data.partie
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

    endPartie(partie) {
      console.log("PArtie =>", partie)
      this.$state.errorMessage = false;
      axios.post('/Partie/endPartie', partie, {headers: {'Content-Type': 'application/json'}})
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

    clearData() {
      this.$state.partie = null;
    }


  },
  getters: {

    getPartie: (state) => {
      return state.partie;
    }

  }

});