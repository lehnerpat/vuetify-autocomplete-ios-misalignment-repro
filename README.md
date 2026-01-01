# Repro for Vuetify `v-autocomplete`'s dropdown being vertically misaligned on iOS

To try it:

* Install dependencies: `npm ci`

* Since this bug only shows up on iOS, run the dev server bound to 0.0.0.0:  
    `npm run dev -- --host 0.0.0.0`

* Open the page on an iOS device (iPhone or iPad) connected to the same network