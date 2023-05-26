<template>
    <div>
      <v-sheet :height="950" :width="auto" class=" bg-indigo-lighten-5 pa-16">
  
        <v-container fill-height fluid>
  
          <v-row justify="space-around">
  
            <v-img class="mt-16 ml-auto" max-width="350"
              src="https://booktrack.app/wp-content/uploads/2022/08/book-track-app-icon.webp"></v-img>
  
            <v-card class="mx-auto mt-16 pa-12" elevation="8" max-width="448" rounded="lg">
  
              <div class="text-subtitle-1 text-medium-emphasis"><strong>Book Club Member ID</strong></div>
  
              <v-text-field density="compact" placeholder="Member ID" prepend-inner-icon="mdi-account-outline"
                variant="outlined"></v-text-field>
  
              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between ">
                <strong>Password</strong>
  
  
                <v-dialog v-model="dialog" persistent width="400">
                  <template v-slot:activator="{ props }">
                    <v-btn variant="plain" size="small" color="purple" v-bind="props">
                      Forgot Password?
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Please enter your email</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
  
  
                        <v-text-field label="Email" required></v-text-field>
  
  
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                      </v-btn>
                      <v-card-text>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog2 = true">
                          Submit
                        </v-btn>
                      </v-card-text>
                      <v-dialog v-model="dialog2" width="400">
                        <v-card>
                          <v-card-title>
                            Password Reset
                          </v-card-title>
                          <v-card-text>
                            <v-container>
  
                              <v-text-field label="New Password" required></v-text-field>
                              <v-text-field label="Confirm Password" required></v-text-field>
  
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" variant="text" @click="dialog2 = false">
                              Close
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="dialog2 = false">
                              Submit
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
  
  
              </div>
  
              <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>
  
              <v-card class="mb-12" color="surface-variant" variant="tonal">
                <v-card-text class="text-medium-emphasis text-caption text-center">
                  Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three
                  hours.
                  If you must login now, you can also click "Forgot password?" below to reset the login password.
                </v-card-text>
              </v-card>
  
              <v-btn block class="mb-5" color="purple" size="large" variant="tonal">
                <router-link style="color: purple; text-decoration: none;" to="/home-page" replace> LOG IN </router-link>
              </v-btn>
  
              <v-btn block class="mb-5" variant="plain" size="small" color="blue" v-bind="props">
                <router-link style="color: blue; text-decoration: none;" to="/sign-up" replace> Sign up now
                      <v-icon icon="mdi-chevron-right"></v-icon></router-link></v-btn>
  
  
            </v-card>
          </v-row>
        </v-container>
      </v-sheet>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      visible: false,
      dialog: false,
      dialog2: false,
    }),
  }
  </script>