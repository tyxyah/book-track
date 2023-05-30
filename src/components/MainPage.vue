<template>
  <v-card height="90" color="primary">
    <div class="d-flex " color="primary">

      <v-col cols="1">
        
      </v-col>
      <v-col cols="2">
        <v-sheet class="pa-2 " color="primary" density="compact"> 
          <router-link style="color: white; text-decoration: none;" to="/home-page" replace><v-btn  flat style="background-color: transparent;" type="input"> 
            <v-card-title style="color: white">BookTrack</v-card-title>   </v-btn></router-link></v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet class="ma-1 pa-2 " color="primary">
          <v-text-field   :loading="loading"
        density="compact"
        variant="solo"
        label="Search Book"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick" 
        type="input"></v-text-field>
          
        </v-sheet>
      </v-col>
    
      <v-spacer></v-spacer>
      <v-col cols="4">
        <div class="d-flex ">
        <v-sheet  class="ma-2 pa-2 " color="primary">
          <v-checkbox color="black" density="compact" label=": Availability" v-model="checkbox" type="checkbox"> </v-checkbox>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 " color="primary">
          <router-link style="color: black; text-decoration: none;" to="/search-book" replace><v-btn type="input"> Search </v-btn></router-link>
        </v-sheet>
        <v-sheet class="ml-2 pa-2 " color="primary">
          <router-link style="color: black; text-decoration: none;" to="/log-in" replace><v-btn icon
              color="white" ><v-icon>mdi-logout</v-icon></v-btn></router-link>
        </v-sheet>
      </div>
      </v-col>
    </div>
  </v-card>
  <v-container> </v-container>
  
    <v-container>
      <v-row justify="end" align="end">
        <router-link style="color: white;text-decoration: none;" to="/add-book" replace><v-btn  color="blue"
          icon="mdi-plus"
          size="small" > <v-icon>mdi-plus</v-icon></v-btn></router-link>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <v-img contain height="200" src="https://sweetcherrypublishing.com/wp-content/uploads/2019/06/Sherlock-series-1-slipcase.jpg">
          </v-img> 
          <v-container align="center">
            <router-link style="color: black; text-decoration: none;"  to="/book-detail" replace> holmes </router-link>
          </v-container> 
        </v-col>
  
        <v-col>
          <v-img contain height="200" src="https://m.media-amazon.com/images/I/51x3kjQd6hL.jpg">
          </v-img>
          <v-container align="center">
            Book Name
          </v-container> 
        </v-col>
  
        <v-col>
          <v-img contain height="200" src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781847496164.jpg">
          </v-img>
          <v-container align="center">
            Book Name
          </v-container> 
        </v-col>
  
        <v-col>
          <v-img contain height="200" src="https://cdn.shopify.com/s/files/1/0601/0883/2974/products/sherlock-holmes-the-adventures-of-sherlock-holmes-9780755334353-3828246741036.jpg?v=1648785258">
          </v-img>
          <v-container align="center">
            Book Name
          </v-container> 
        </v-col>
  
        <v-col>
          <v-img contain height="200" src="https://kbimages1-a.akamaihd.net/9249191b-78b7-497b-aeb7-ea2201969042/1200/1200/False/the-memoirs-of-sherlock-holmes-192.jpg">
          </v-img>
          <v-container align="center">
            Book Name
          </v-container> 
        </v-col>
      </v-row>
  <v-divider></v-divider>
  <v-container></v-container>
      <v-row justify="center" align="center">
        <v-col>
          <v-img contain height="200" src="https://m.media-amazon.com/images/I/51x3kjQd6hL.jpg">
          </v-img>
          <v-container align="center">
            Book Name
          </v-container> 
        </v-col>
  
        <v-col>
          <v-img contain height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8bcWrZiSfVi3rAwKPOOHT-2ghCQxXb2-86ApvLz41qeQwRHaxzyQhrWBVfu5S3ymqvs&usqp=CAU">
          </v-img>
          <v-container align="center">
            Book Name
          </v-container> 
        </v-col>
  
        <v-col>
          <v-img contain height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaCvo5g4JhUQENH0cYq0AhlH2uwCueTX8lU-fv9fXGra2t806ZEiIwpY4aneao0qped4&usqp=CAU">
          </v-img>
          <v-container align="center">
            Book Name
          </v-container> 
        </v-col>
  
        <v-col>
          <v-img contain height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFKXAUAtUJ2K8wgLasYAunpOSrsAfWQp0BZyhk2BFvC290A9tHJ1fxSuqR33IpSNVePQ&usqp=CAU">
          </v-img>
          <v-container align="center">
            Book Name
          </v-container> 
        </v-col>
  
        <v-col>
          <v-img contain height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpb_uSyLBwkzXONdx8OaqDxaJdPQOib0mhcSMKR2-TUi3vn3NdEcAsyOmkYyrtpmcvghQ&usqp=CAU">
          </v-img>
          <v-container align="center">
            Book Name
          </v-container> 
        </v-col>
      </v-row>
      <v-divider></v-divider>

    </v-container>
    <v-container></v-container>
  </template>
  <script>
  export default {
    data () {
      return {
        checkbox: false,
      }
    },
    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>
