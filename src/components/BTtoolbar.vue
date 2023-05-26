<template>
  <v-card height="90" color="primary">
    <div class="d-flex " color="primary">

      <v-col cols="1">
        
      </v-col>
      <v-col cols="2">
        <v-sheet class="ma-2 pa-2 " color="primary" density="compact"> 
          <v-btn  flat style="background-color: transparent;" > <router-link style="color: white; text-decoration: none;" to="/home-page" replace>
            <v-card-title>BookTrack</v-card-title>  </router-link> </v-btn></v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet class="ma-2 pa-2 " color="primary">
          <v-text-field  density="compact" variant="solo" single-line hide-details append-inner-icon="mdi-magnify" ></v-text-field>
          
        </v-sheet>
      </v-col>
    
      <v-spacer></v-spacer>
      <v-col cols="4">
        <div class="d-flex ">
        <v-sheet  class="ma-2 pa-2 " color="primary">
          <v-checkbox color="black" density="compact" label=": Availability" v-model="checkbox"> </v-checkbox>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 " color="primary">
          <v-btn><router-link style="color: black; text-decoration: none;" to="/search-book" replace> Search </router-link></v-btn>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 " color="primary">
          <v-btn icon
              color="white" ><router-link style="color: black; text-decoration: none;" to="/" replace></router-link><v-icon>mdi-logout</v-icon></v-btn>
        </v-sheet>v
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
