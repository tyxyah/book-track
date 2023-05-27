

<template>
    <v-container></v-container>
    <v-row justify='center'>
        <v-card width="940" color="purple-lighten-5" rounded="100" density="compact">
  
            <div class="d-flex align-center">
                <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
                    <v-card-title>Adding a new book</v-card-title>
                </v-sheet>
                <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                    <router-link style="color: black; text-decoration: none;" to="/home-page" replace> <v-btn icon="$close" height="30" width="30" variant="text"><v-icon>mdi-close</v-icon> </v-btn></router-link>
                </v-sheet>
            </div>
  
  
            <v-divider thickness="1"> </v-divider>
            <div>
  
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2 " color="purple-lighten-5"> Title</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto " color="purple-lighten-5"> :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field density="compact" variant="solo" single-line hide-details></v-text-field>
                        </v-sheet>
                    </v-col>
                </v-sheet>
  
            </div>
  
            <div>
  
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2 " color="purple-lighten-5"> Author</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto " color="purple-lighten-5"> :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field density="compact" variant="solo" single-line hide-details></v-text-field>
                        </v-sheet>
                    </v-col>
                </v-sheet>
  
            </div>
            <div>
  
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2 " color="purple-lighten-5"> Publication Date</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto " color="purple-lighten-5"> :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field density="compact" variant="solo" single-line hide-details></v-text-field>
                        </v-sheet>
                    </v-col>
                </v-sheet>
  
            </div>
            <div>
  
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2 " color="purple-lighten-5"> ISBN</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto " color="purple-lighten-5"> :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field variant="solo" density="compact" single-line hide-details></v-text-field>
                        </v-sheet>
                    </v-col>
                </v-sheet>
  
            </div>
            <div>
  
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2 " color="purple-lighten-5"> UUID</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto " color="purple-lighten-5"> :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field variant="solo" density="compact" single-line hide-details></v-text-field>
                        </v-sheet>
                    </v-col>
                </v-sheet>
  
            </div>
            <div>
  
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2 " color="purple-lighten-5"> Genre</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto " color="purple-lighten-5"> :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-combobox single-line hide-details variant="solo" v-model="value2" :items="genre"
                                density="compact"></v-combobox>
                        </v-sheet>
                    </v-col>
                </v-sheet>
  
            </div>
            <div>
  
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2 " color="purple-lighten-5"> Status of Availability</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto " color="purple-lighten-5"> :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-combobox single-line hide-details variant="solo" v-model="value" :items="availability"
                                density="compact"></v-combobox>
                        </v-sheet>
                    </v-col>
                </v-sheet>
  
            </div>
            <div>
  
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2 " color="purple-lighten-5"> Synopsis</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto " color="purple-lighten-5"> :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field variant="solo" density="compact" single-line hide-details></v-text-field>
                        </v-sheet>
                    </v-col>
                </v-sheet>
  
            </div>
            <div>
  
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2 " color="purple-lighten-5"> Cover Image</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto " color="purple-lighten-5"> :</v-sheet>
                    </v-col>
  
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2" color="purple-lighten-5"> <v-img contain height="300"
                                src="https://sweetcherrypublishing.com/wp-content/uploads/2019/06/Sherlock-series-1-slipcase.jpg">
                            </v-img></v-sheet>
  
                    </v-col>
  
                    <v-col cols="4">
                        <v-sheet class="flex-column" color="purple-lighten-5">
                            <v-sheet class="ma-2 pa-2" color="purple-lighten-5"> <v-btn color="blue-accent-3">Upload Cover
                                    Image</v-btn></v-sheet>
  
                            <v-sheet class="ma-2 pa-2" color="purple-lighten-5"> <v-btn color="blue-grey-lighten-4">Remove
                                    Cover Image</v-btn></v-sheet>
                        </v-sheet>
                    </v-col>
                </v-sheet>
  
  
            </div>
            <div>
  
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        
                    </v-col>
                    <v-col cols="2">
                       
                    </v-col>
  
                    <v-col cols="2">
                        
  
                    </v-col>
  
                    <v-col cols="1">
                        <v-sheet class="d-flex justify-end" color="purple-lighten-5">
                            <v-sheet class="ma-2 pa-2 d-flex" color="purple-lighten-5"> <v-btn
                                color="green" @click="dialog2 = true">Confirm</v-btn></v-sheet>
                        <v-sheet class="ma-2 pa-2 d-flex" color="purple-lighten-5"> <router-link style="color: blueviolet; text-decoration: none;" to="/home-page" replace><v-btn
                                color="red">Cancel</v-btn></router-link></v-sheet>
                        </v-sheet>
                    </v-col>
                </v-sheet>
                <v-dialog v-model="dialog2" width="400">
                        <v-card>
                          <v-card-title>
                            Are you sure want to add this book?
                          </v-card-title>
                         
                          <v-card-actions>
                            <v-spacer></v-spacer>
                           
                            <router-link style="color: blueviolet; text-decoration: none;" to="/home-page" replace><v-btn color="blue-darken-1" variant="text" @click="dialog2 = false">
                                Yes
                            </v-btn></router-link>
                            <v-btn color="primary" variant="text" @click="dialog2 = false">
                              No
                            </v-btn>
                         
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
  
            </div>
           
           <!-- <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Avatar"
    ></v-file-input>-->
        </v-card>
  
    </v-row>
  </template>
  
  <script>
  export default {
    data: () => ({
        availability: ['Available', 'Non-Available'],
        value: 'Available',
        genre: ['Thriller', 'Comedian', 'Horror', 'Romantic'],
        value2: 'Thriller',
        visible: false,
        dialog: false,
        dialog2: false,
        rules: [
          value => {
            return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
          },
        ],
    }),
  }
  
  </script>
