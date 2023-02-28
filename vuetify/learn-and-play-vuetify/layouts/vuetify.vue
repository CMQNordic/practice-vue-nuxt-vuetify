<template>
   <v-app theme="dark">
      <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"> -->
      <TheHeader />
      <v-main>
         <v-container>
            <slot />
         </v-container>
      </v-main>
      <TheFooter />
      <!-- </v-parallax> -->
   </v-app>
</template>

