<template>
   <v-footer app :elevation="0" class="bg-transparent">
      <div class="d-flex align-center w-100">
         <v-spacer />

         <v-text class="text-uppercase text-caption">Follow us on social media</v-text>

         <v-btn icon="mdi: mdi-facebook" color="blue-darken-3" class="mx-3" variant="plain" href="http://facebook.com" target="_blank" />

         <v-btn
            icon="mdi: mdi-instagram"
            color="red-darken-3"
            class="me-10"
            variant="plain"
            href="http://www.instagram.com"
            target="_blank"
         />
      </div>
   </v-footer>
</template>

