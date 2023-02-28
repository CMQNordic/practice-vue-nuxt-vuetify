<script setup>
const drawer = ref(false);
const show = ref(false);
</script>

<template>
   Read <a href="https://next.vuetifyjs.com/en/components/application/#layout-components">here</a> how to layout components in app.
   <br />
   <p>LAYOUT #1</p>
   <v-container class="bg-blue">
      <p>v-layout | v-navigation-drawer | v-app-bar | v-main</p>
      <v-layout class="bg-grey-lighten-5">
         <!-- drawer before app-bar to overlay app-bar -->
         <v-navigation-drawer location="right" temporary v-model="drawer" color="white">
            <div class="w-100 text-right">
               <v-btn flat color="white" icon="$close" @click.stop="drawer = !drawer" />
            </div>
            <v-btn block variant="text">Link 1</v-btn>
            <v-btn block variant="text">Link 2</v-btn>
            <v-btn block variant="text">Link 3</v-btn>
         </v-navigation-drawer>

         <v-app-bar density="compact" color="transparent">
            <v-toolbar-title> Toolbar title </v-toolbar-title>

            <v-toolbar-items class="d-none d-md-flex">
               <v-btn>Link 1</v-btn>
               <v-btn>Link 2</v-btn>
               <v-btn @click.stop="drawer = !drawer">MORE <v-icon icon="$next" /></v-btn>
            </v-toolbar-items>

            <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
         </v-app-bar>

         <v-main>
            <v-card color="transparent" height="200px" class="d-flex align-center text-center">
               <v-card-text>Created with standard navigation layout elements</v-card-text>
            </v-card>
         </v-main>
      </v-layout>
   </v-container>

   <br />

   <p>CARD #1</p>
   <v-container class="bg-blue">
      <p>v-card | v-expand-transition</p>
      <v-card loading variant="outlined" theme="light" class="bg-white" title="Card title" subtitle="Subtitle">
         <v-card-text>
            <span class="text-no-wrap">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis ipsum dolor sit amet consectetur
               adipisicing elit. Commodi, ratione debitis
            </span>
         </v-card-text>

         <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click.stop="show = !show">
               {{ show ? 'HIDE' : 'READ MORE' }}
               <v-icon :icon="show ? 'mdi: mdi-chevron-up' : 'mdi: mdi-chevron-down'" />
            </v-btn>
         </v-card-actions>

         <v-expand-transition>
            <div v-show="show">
               <v-divider></v-divider>

               <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping,
                  soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros
                  to that or we walk! You're going to do his laundry? I've got to find a way to escape.
               </v-card-text>
            </div>
         </v-expand-transition>
      </v-card>
   </v-container>

   <br />
   <h1 class="text-h6 bg-purple text-yellow-accent-3">text</h1>
   <p>V-CONTAINER (red)</p>
   <p>Wrapper element that add x margin depending on screen size and keep content centered</p>
   <p>Adds fixed padding so the content is a bit smaller than the container</p>
   <v-container style="border: 1px dotted red">
      <div style="width: 100%; height: 150px; border: 1px dotted white">
         DIV in container
         <v-sheet style="border: 1px dotted yellow"> V-SHEET in div. does not add any margin/padding. Almost as div. </v-sheet>
      </div>
   </v-container>

   <v-container class="bg-blue">
      <v-row class="bg-white" justify="space-between">
         <v-col class="bg-yellow">hej</v-col>
         <v-col class="bg-grey">på</v-col>
         <v-col class="bg-yellow">dig</v-col>
      </v-row>
   </v-container>

   <br />

   <v-container class="bg-blue-darken-3">
      <div class="d-flex">
         class="d-flex"
         <v-spacer />
         <strong class="font-italic">by default: justify-start & align-stretched</strong>
      </div>
      <div class="d-flex mb-6 bg-white">
         <v-sheet v-for="n in 3" :key="n" class="ma-2 pa-2"> d-flex</v-sheet>
      </div>

      <div>class="d-flex justify-start"</div>
      <div class="d-flex justify-start mb-6 bg-white">
         <v-sheet v-for="n in 3" :key="n" class="ma-2 pa-2"> justify-start </v-sheet>
      </div>

      <div>class="d-flex justify-end"</div>
      <div class="d-flex justify-end mb-6 bg-white">
         <v-sheet v-for="n in 3" :key="n" class="ma-2 pa-2"> justify-end </v-sheet>
      </div>

      <div>class="d-flex justify-center"</div>
      <div class="d-flex justify-center mb-6 bg-white">
         <v-sheet v-for="n in 3" :key="n" class="ma-2 pa-2"> justify-center </v-sheet>
      </div>

      <div>class="d-flex justify-space-between"</div>
      <div class="d-flex justify-space-between mb-6 bg-white">
         <v-sheet v-for="n in 3" :key="n" class="ma-2 pa-2"> justify-space-between </v-sheet>
      </div>

      <div class="d-flex">
         class="d-flex justify-space-around"
         <v-spacer />
         <strong class="font-italic">by default align-stretched</strong>
      </div>
      <v-sheet height="130" class="d-flex justify-space-around mb-6 bg-white">
         <v-sheet v-for="n in 3" :key="n" class="ma-2 pa-2"> justify-space-around </v-sheet>
      </v-sheet>

      <div>class="d-flex justify-space-between align-center"</div>
      <v-sheet class="d-flex justify-space-between align-center mb-6 bg-white" height="130">
         <v-sheet v-for="n in 3" :key="n" class="ma-2 pa-2"
            >justify-space-between <br />
            align-center
         </v-sheet>
      </v-sheet>

      <div>class="d-flex justify-space-around align-stretch"</div>
      <v-sheet class="d-flex justify-space-around align-end mb-6 bg-white" height="130">
         <v-sheet v-for="n in 3" :key="n" class="ma-2 pa-2"
            >justify-space-between <br />
            align-end
         </v-sheet>
      </v-sheet>
   </v-container>

   <br />
   <v-container class="d-flex bg-blue-darken-3">
      <v-sheet color="white" width="40" height="40" class="rounded-circle ma-2">
         <v-text class="text-caption">rounded-circle</v-text></v-sheet
      >

      <v-sheet color="white" width="80" height="40" class="rounded-pill ma-2"><v-text class="text-caption">rounded-pill</v-text></v-sheet>

      <v-sheet color="white" width="60" height="40" class="rounded-xl ma-2"><v-text class="text-caption">rounded-xl</v-text></v-sheet>

      <v-sheet color="white" width="60" height="40" class="rounded-t-lg ma-2"><v-text class="text-caption">rounded-t-lg</v-text></v-sheet>

      <v-sheet color="white" width="60" height="40" class="rounded-e-sm ma-2"><v-text class="text-caption">rounded-t-lg</v-text></v-sheet>

      <v-sheet color="white" width="60" height="40" class="rounded-0 ma-2"><v-text class="text-caption">rounded-0</v-text></v-sheet>

      <v-sheet color="white" width="60" height="40" class="rounded-xl rounded-be-0 ma-2">
         <v-text class="text-caption">rounded-xl rounded-be-0</v-text></v-sheet
      >
   </v-container>

   <v-container>
      <div><strong class="text-h5">0 -xs- 600 -sm- 960 -md- 1264 -lg- 1904 -xl </strong></div>

      <br />
      <div>
         <strong>class="d-inline d-sm-none"</strong> - visible on smaller than sm (under 600) =>
         <span class="d-inline d-sm-none">❤️</span>
      </div>

      <div>
         <strong>class="d-none d-sm-inline"</strong> - visible on sm and larger (600 up) =>
         <span class="d-none d-sm-inline">❤️</span>
      </div>

      <div>
         <strong>class="d-none d-md-inline"</strong> - visible on lg and larger (1264 up) =>
         <span class="d-none d-md-inline">❤️</span>
      </div>

      <div>
         <strong>class="d-none d-sm-inline d-md-none"</strong> - visible on sm nol (600 to 960) =>
         <span class="d-none d-md-inline">❤️</span>
      </div>
   </v-container>
</template>
