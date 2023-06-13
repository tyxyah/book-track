<template>
  <v-dialog v-model="dialog" width="800">
    <v-card color="indigo-lighten-5">
      <v-row>
        <v-col style="height:40px" justify="end" align="end">
          <router-link
            style="color: black; text-decoration: none"
            to="/home-page"
            replace
          >
            <v-btn
              color="black"
              icon="mdi-close"
              size="small"
              variant="text"
              @click="dialog = false"
            >
            </v-btn>
          </router-link>
        </v-col>
        <v-container style="height:80px">
          <v-card-title style="text-align:center">
            <span style="font-family: hand; font-size: 40px;">{{ bookList.title }}</span>
          </v-card-title>
        </v-container>
       
      </v-row>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-container>
          <v-row justify="center" align-content="center">
            <!--Card Picture-->
            <v-col cols="7">
              <v-img
                contain
                height="400"
                src="https://sweetcherrypublishing.com/wp-content/uploads/2019/06/Sherlock-series-1-slipcase.jpg"
              >
              </v-img>
            </v-col>
            <!------------------->

            <!--Card Description-->
            <v-col>
              <v-card-text> Author: {{ bookList.author }} </v-card-text>
              <v-card-text>
                Publication Date: {{ bookList.publication_date }}
              </v-card-text>
              <v-card-text> ISBN: {{ bookList.isbn }} </v-card-text>
              <v-card-text> Genre: {{ bookList.genre }} </v-card-text>
              <v-card-text> Status of availbility: Available </v-card-text>
              <v-card-text>
                Synopsis:
                <div class="text--primary">
                  {{ bookList.synopsis }}
                </div>
              </v-card-text>
            </v-col>
            <!------------------->
          </v-row>

          <!--Go to edit page!-->
          <v-row>
            <v-col>
              <v-row>
                <v-card-text>
                  <v-btn
                    style="margin-left: 80%; color: rgb(21, 21, 21)"
                    @click="redirectToEditPage(this.bookUUID)"
                  >
                    Edit
                  </v-btn>
                  <v-btn color="red" @click="dialog2 = true" type="input"
                    >Delete
                  </v-btn>
                </v-card-text>
              </v-row>
              <v-dialog v-model="dialog2" width="400">
                <v-card>
                  <v-card-title>
                    Are you sure want to delete this book?
                  </v-card-title>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <router-link
                      style="color: blueviolet; text-decoration: none"
                      to="/home-page"
                      replace
                      ><v-btn
                        color="blue-darken-1"
                        variant="text"
                        @click="deleteBook()"
                        type="input"
                      >
                        Yes
                      </v-btn></router-link
                    >
                    <v-btn
                      color="primary"
                      variant="text"
                      @click="dialog2 = false"
                      type="input"
                    >
                      No
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <!------------------->
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: true,
      dialog2: false,
      //   bookID: "",
      bookList: {},
    };
  },

  created() {
    this.bookUUID = this.$route.params.id;
    console.log(this.bookUUID);
    this.fetchBookDetails();
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    redirectToEditPage(id) {
      this.$router.push(`/book-edit/${id}`);
      console.log(this.$route);
    },

    async fetchBookDetails() {
      try {
        const url = `https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book?uuid=${this.bookUUID}`;
        const res = await axios.get(url);
        this.bookList = res.data;
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    },

    async deleteBook() {
      try {
        const url = `https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book?uuid=${this.bookUUID}`;
        const res = await axios.delete(url);
        this.bookList = res.data;
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
