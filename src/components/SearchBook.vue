<template>
   <v-card height="90" color="primary">
    <div class="d-flex " color="primary">

      <v-col cols="1">
        
      </v-col>
      <v-col cols="2">
        <v-sheet class="pa-2 " color="primary" density="compact"> 
          <router-link style="color: white; text-decoration: none;" to="/home-page" replace><v-btn  flat style="background-color: transparent;" > 
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
        @click:append-inner="onClick" ></v-text-field>
          
        </v-sheet>
      </v-col>
    
      <v-spacer></v-spacer>
      <v-col cols="4">
        <div class="d-flex ">
        <v-sheet  class="ma-2 pa-2 " color="primary">
          <v-checkbox color="black" density="compact" label=": Availability" v-model="checkbox"> </v-checkbox>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 " color="primary">
          <router-link style="color: black; text-decoration: none;" to="/search-book" replace><v-btn> Search </v-btn></router-link>
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
    <v-sheet class="d-flex align-center flex-column">
        <v-card height="40" flat style="background-color: transparent;" width="1100">
            <v-sheet justify-start density="comfortable" class="">
                Search result for 'Sherlock Homes'
            </v-sheet>
        </v-card>
        <v-card height="60" color="#EDEDED" width="1100">

            <div class="d-flex ">
                <v-col cols="1">
                    <v-sheet class="ma-2 pa-0" color="#EDEDED">
                        Sort by
                    </v-sheet>

                </v-col>

                <v-col cols="4">

                    <v-combobox color="white" v-model="value" :items="items" density="compact" variant="solo" single-line
                        hide-details></v-combobox>
                </v-col>
                <v-spacer></v-spacer>

                <v-col cols="2">
                    <v-pagination v-model="page" :length="4" prev-icon="mdi-menu-left" density="compact"
                        next-icon="mdi-menu-right"></v-pagination>
                </v-col>
            </div>
        </v-card>
        
        <v-card height="250" flat style="background-color: transparent;" width="1100">

            <div class="d-flex ">
                <v-col cols="2">
                    <v-img contain height="230" width="500"
                        src="https://sweetcherrypublishing.com/wp-content/uploads/2019/06/Sherlock-series-1-slipcase.jpg">
                    </v-img>

                </v-col>

                <v-col cols="4">
                    <v-row>
                        <v-card-title>The Sherlock Homes </v-card-title>

                    </v-row>
                    <v-row>
                        <v-card-text><v-row>Author : Braun Abby</v-row>
                            <v-row>Publication : 21 September 2022</v-row>
                        </v-card-text>

                    </v-row>
                </v-col>
                <v-col cols="2">
                    <v-img contain height="230" width="500" src="https://m.media-amazon.com/images/I/51x3kjQd6hL.jpg">
                    </v-img>

                </v-col>

                <v-col cols="4">
                    <v-row>
                        <v-card-title>The Sherlock Homes </v-card-title>
                        <v-card-text>The Three Student</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text><v-row>Author : Braun Abby</v-row>
                            <v-row>Publication : 21 September 2022</v-row>
                        </v-card-text>

                    </v-row>
                </v-col>

            </div>
    
        </v-card>

        <v-card height="250" flat style="background-color: transparent;" width="1100">

            <div class="d-flex ">
                <v-col cols="2">
                    <v-img contain height="230" width="500"
                        src="https://sweetcherrypublishing.com/wp-content/uploads/2019/06/Sherlock-series-1-slipcase.jpg">
                    </v-img>

                </v-col>

                <v-col cols="4">
                    <v-row>
                        <v-card-title>The Sherlock Homes </v-card-title>

                    </v-row>
                    <v-row>
                        <v-card-text><v-row>Author : Braun Abby</v-row>
                            <v-row>Publication : 21 September 2022</v-row>
                        </v-card-text>

                    </v-row>
                </v-col>
                <v-col cols="2">
                    <v-img contain height="230" width="500" src="https://m.media-amazon.com/images/I/51x3kjQd6hL.jpg">
                    </v-img>

                </v-col>

                <v-col cols="4">
                    <v-row>
                        <v-card-title>The Sherlock Homes </v-card-title>
                        <v-card-text>The Three Student</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text><v-row>Author : Braun Abby</v-row>
                            <v-row>Publication : 21 September 2022</v-row>
                        </v-card-text>

                    </v-row>
                </v-col>

            </div>
        </v-card>
        <v-card height="250" flat style="background-color: transparent;" width="1100">

            <div class="d-flex ">
                <v-col cols="2">
                    <v-img contain height="230" width="500"
                        src="https://sweetcherrypublishing.com/wp-content/uploads/2019/06/Sherlock-series-1-slipcase.jpg">
                    </v-img>

                </v-col>

                <v-col cols="4">
                    <v-row>
                        <v-card-title>The Sherlock Homes </v-card-title>

                    </v-row>
                    <v-row>
                        <v-card-text><v-row>Author : Braun Abby</v-row>
                            <v-row>Publication : 21 September 2022</v-row>
                        </v-card-text>

                    </v-row>
                </v-col>
                <v-col cols="2">
                    <v-img contain height="230" width="500" src="https://m.media-amazon.com/images/I/51x3kjQd6hL.jpg">
                    </v-img>

                </v-col>

                <v-col cols="4">
                    <v-row>
                        <v-card-title>The Sherlock Homes </v-card-title>
                        <v-card-text>The Three Student</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text><v-row>Author : Braun Abby</v-row>
                            <v-row>Publication : 21 September 2022</v-row>
                            
                        </v-card-text>

                    </v-row>
                </v-col>

            </div>
        </v-card>
        
        <v-divider thickness="7" color="white"></v-divider>








    </v-sheet>
</template>
<script>
export default {
    data: () => ({
        items: ['Title','Author','Publication Date','ISBN','UUID','Genre','Status of Availability'],
        value: '',
        page: 1,
        checkbox: false,
    }),
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
