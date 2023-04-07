<template>
  
  <v-card
    color="grey-lighten-4"
    flat
    height="200px"
    rounded="0"
  >
    <v-toolbar density="compact">
      
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Skemer</v-toolbar-title>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-row class="ma-2" justify="right">
      <v-checkbox label="Availability"></v-checkbox>
      </v-row>

      <v-btn>
        Search
      </v-btn>
    </v-toolbar>
  </v-card>

</template>

<script setup>
  //
</script>
