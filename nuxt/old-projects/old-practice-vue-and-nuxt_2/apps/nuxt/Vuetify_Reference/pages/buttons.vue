<template>
  <div>
    <p>vuetify btn elements styled with props</p>
    <v-row justify="space-around" class="mb-3">
      <v-btn x-small>x-small</v-btn>
      <v-btn x-small bottom>x-small bottom</v-btn>
      <v-btn small>small</v-btn>
      <v-btn medium>medium</v-btn>
      <v-btn large>large</v-btn>
      <v-btn x-large>x-large</v-btn>
    </v-row>

    <v-row justify="space-around" class="mb-6">
      <v-btn class="elevation-2">elevation-2</v-btn>
      <v-btn class="elevation-3">elevation-3</v-btn>
      <v-btn class="elevation-5">elevation-5</v-btn>
      <v-btn class="elevation-10">elevation-10</v-btn>
      <v-btn class="elevation-15">elevation-15</v-btn>
    </v-row>

    <v-row justify="space-around" class="mb-5">
      <v-btn>normal</v-btn>
      <v-btn tile>tile</v-btn>
      <v-btn depressed>depressed</v-btn>
      <v-btn raised>raised</v-btn>
      <v-btn text>text</v-btn>
      <v-btn outlined>outlined</v-btn>
    </v-row>

    <v-row justify="space-around" class="mb-5">
      <v-btn retain-focus-on-click>retain-focus-on-click #1</v-btn>
      <v-btn retain-focus-on-click>retain-focus-on-click #2</v-btn>
      <v-btn shaped>shaped</v-btn>
    </v-row>

    <v-row justify="space-around" class="mb-5">
      <v-btn icon>icon</v-btn>
      <v-btn fab>fab</v-btn>
      <v-btn nuxt>nuxt (link)</v-btn>
    </v-row>

    <v-row justify="space-around" class="mb-3">
      <v-btn x-small tile outlined color="success">
        <v-icon left x-small>mdi-pencil</v-icon>
        Edit
      </v-btn>
      <v-btn x-small tile outlined color="success">
        <v-icon left x-small>mdi-pencil</v-icon>
        Edit
      </v-btn>
      <v-btn x-small tile class="elevation-5">
        <v-icon left x-small>mdi-pencil</v-icon>
        Edit
      </v-btn>
      <v-btn x-small tile :ripple="false" class="elevation-4">
        <v-icon left x-small>mdi-pencil</v-icon>
        Edit (ripple false)
      </v-btn>
    </v-row>

    <v-row justify="space-around" class="mb-5">
      <v-btn x-small block color="success">
        Block button
      </v-btn>
      <v-btn x-small block color="success" class="black--text mt-2">
        Block button
      </v-btn>
    </v-row>

    <p>Native button styled with props</p>

    <v-row justify="space-around" class="mb-5">
      <button>Button</button>
      <button v-ripple class="elevation-2 py-2 px-4">Button</button>
    </v-row>
  </div>

</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
</style>