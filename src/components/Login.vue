<template>
  <div >
    <v-sheet height="877" width="auto" class="bg-indigo-lighten-5 pa-16">
      <v-container fill-height fluid>
        <v-col cols="12">
            <h1 style="font-family: hand; font-size: 60px;" class="text-center">BookTrack</h1>
            <h1 style="font-family: sans-serif; font-size: 20px;" class="text-center">"Effortlessly Manage Your Book Collection"</h1>
          </v-col>
        <v-row justify="space-around">
         
          <v-img
            class="mt-16 ml-auto"
            max-width="350"
            src="https://booktrack.app/wp-content/uploads/2022/08/book-track-app-icon.webp"
          ></v-img>

          <v-card
            class="mx-auto mt-16 pa-10"
            elevation="8"
            width="430"
            height="430"
            rounded="lg"
          >
            <div class="text-subtitle-1 text-medium-emphasis mt-3">
              <strong>Book Club Member ID</strong>
            </div>

            <v-text-field
              density="compact"
              label="Member ID"
              prepend-inner-icon="mdi-account-outline"
              type="input"
              v-model="member_id"
            ></v-text-field>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between mt-2"
            >
              <strong>Password</strong>

              <v-dialog v-model="dialog" persistent width="400">
                <template v-slot:activator="{ props }">
                  <v-btn
                    variant="plain"
                    size="small"
                    color="purple"
                    v-bind="props"
                    type="input"
                  >
                    Forgot Password?
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Please enter your email</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-text-field
                        label="Email"
                        type="input"
                        required
                      ></v-text-field>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      type="cancel"
                      @click="dialog = false"
                    >
                      Close
                    </v-btn>
                    <v-card-text>
                      <v-btn
                        color="blue-darken-1"
                        variant="text"
                        type="submit"
                        @click="dialog2 = true"
                      >
                        Submit
                      </v-btn>
                    </v-card-text>
                    <v-dialog v-model="dialog2" width="400">
                      <v-card>
                        <v-card-title> Password Reset </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-text-field
                              label="New Password"
                              type="input"
                              required
                            ></v-text-field>
                            <v-text-field
                              label="Confirm Password"
                              type="input"
                              required
                            ></v-text-field>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            variant="text"
                            type="cancel"
                            @click="dialog2 = false"
                          >
                            Close
                          </v-btn>
                          <v-btn
                            color="blue-darken-1"
                            variant="text"
                            type="submit"
                            @click="dialog2 = false"
                          >
                            Submit
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>

            <v-text-field
              :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
              :type="visible ? 'input' : 'password'"
              density="compact"
              label="Enter your password"
              prepend-inner-icon="mdi-lock-outline"
              v-model="password"
              @click:append-inner="visible = !visible"
            ></v-text-field>

            <v-btn
              block
              class="mb-5 mt-7"
              color="purple"
              size="large"
              variant="tonal"
              type="input"
              @click="login"
            >
              LOG IN
            </v-btn>

            <router-link
              style="color: blue; text-decoration: none"
              to="/sign-up"
              replace
            >
              <v-btn
                block
                class="mb-5"
                variant="plain"
                size="small"
                color="blue"
                type="input"
                v-bind="props"
              >
                Sign up now
                <v-icon icon="mdi-chevron-right"></v-icon
              ></v-btn>
            </router-link>
          </v-card>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
  
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      member_id: "",
      password: "",
      user_data: [],
      matchUser: undefined,
      errors: [],
      visible: false,
      dialog: false,
      dialog2: false,
    };
  },

  methods: {
    async login() {
      try {
        const url =
          "https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/user";
        const payload = {
          member_id: this.member_id,
          password: this.password,
        };
        console.log(payload);
        const response = await axios.get(url);
        this.user_data = response.data.Items;
        console.log(this.user_data);

        const matchingUser = this.user_data.find(
          (user) =>
            user.member_id === payload.member_id &&
            user.password === payload.password
        );

        if (matchingUser) {
          this.matchUser = matchingUser;
          console.log("You are logged in");
          this.$router.push("/home-page");
        } else {
          console.log("Invalid credentials. Please try again.");
          alert('Wrong credentials, please try again!')
        }

      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>

