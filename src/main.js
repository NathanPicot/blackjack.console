/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createPinia } from 'pinia'

loadFonts()

const pinia = createPinia()
createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
