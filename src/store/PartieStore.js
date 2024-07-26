// PartieStore.js

import {defineStore} from 'pinia';
import axios from '@/axios';
//const querystring = require('querystring');
// users.js
export const usePartieStore = defineStore('partie', {
  id: 'partie',
  state: () => ({
    gainPerDayList: [],
    partie: null,
    allGain: 0,
    allMise: 0,
    partieNumber: 0,
    errorMessage: false,
  }),
  actions: {
    createPartie(partie) {

      this.$state.errorMessage = false;

      axios.post('/Partie/add', partie, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
          if (response.data.success) {
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
    },

    fetchAllGain(){
      this.$state.errorMessage = false;

      axios.get('/Partie/getTotalGain')
          .then(response => {
            if (response.status === 200) {
              this.$state.errorMessage = false;
              console.log("response", response)
              this.$state.allGain = response.data
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

    fetchAllMise(){
      this.$state.errorMessage = false;

      axios.get('/Partie/getTotalMise')
          .then(response => {
            if (response.status === 200) {
              this.$state.errorMessage = false;
              console.log("response", response)
              this.$state.allMise = response.data
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

    fetchGainPerDayList() {
       this.$state.errorMessage = false;

       axios.get('/Partie/getGainPerDayList')
           .then(response => {
             if (response.status === 200) {
               this.$state.errorMessage = false;
               console.log("response", response)

               this.$state.gainPerDayList = response.data
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

    fetchPartieNumber() {
      this.$state.errorMessage = false;

      axios.get('/Partie/countAllPartie')
          .then(response => {
            if (response.status === 200) {
              this.$state.errorMessage = false;
              console.log("response", response)

              this.$state.partieNumber = response.data
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

  }

});