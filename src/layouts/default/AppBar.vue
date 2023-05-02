<template>
  
 
    <v-toolbar density="compact">

      <v-toolbar-title>BookTrack</v-toolbar-title>

      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        label="Search Book"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>

      <v-row class="ma-2" justify="right">
     
      </v-row>
      <v-checkbox label="Availability"></v-checkbox>
      <v-btn>
        Search
      </v-btn>
    </v-toolbar>

</template>

<script setup>
  //
</script>
