<template>
  <v-card height="90" color="primary">
    <div class="d-flex " color="primary">

      <v-col cols="1">
        
      </v-col>
      <v-col cols="1">
        <v-sheet class="ma-2 pa-2 " color="primary" density="compact"> <v-card-title>BookTrack</v-card-title></v-sheet>
      </v-col>
      <v-col cols="7">
        <v-sheet class="ma-2 pa-2 " color="primary">
          <v-text-field prepend-inner-icon="mdi-magnify" density="compact" variant="solo" single-line hide-details></v-text-field>
        </v-sheet>
      </v-col>
      
      <v-spacer></v-spacer>
      <v-col cols="4">
        <div class="d-flex ">
        <v-sheet  class="ma-2 pa-2 " color="primary">
          <v-checkbox color="black" density="compact" label=": Availability" v-model="checkbox"> </v-checkbox>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 " color="primary">
          <v-btn>Search</v-btn>
        </v-sheet>
      </div>
      </v-col>
    </div>
  </v-card>
  <v-container></v-container>
</template>
<script>
  export default {
    data () {
      return {
        checkbox: false,
      }
    },
  }
</script>
