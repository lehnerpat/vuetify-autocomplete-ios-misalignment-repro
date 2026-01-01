import "vuetify/dist/vuetify-labs.css"

import { createApp } from 'vue'
import { vuetify } from './vuetify'
import App from './App.vue'
import './setup'

const app = createApp(App)
app.config.errorHandler = e => console.error(e)

app.use(vuetify)

app.mount('#app')
