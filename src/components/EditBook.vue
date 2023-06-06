<template>
  <v-container></v-container>
  <v-row justify="center">
    <v-card
      width="940"
      color="purple-lighten-5"
      rounded="100"
      density="compact"
    >
      <div class="d-flex align-center">
        <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
          <v-card-title>Edit a book</v-card-title>
        </v-sheet>
        <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
          <router-link
            style="color: black; text-decoration: none"
            to="/home-page"
            replace
            ><v-btn icon height="30" width="30" variant="text" type="input">
              <v-icon>mdi-close</v-icon>
            </v-btn></router-link
          >
        </v-sheet>
      </div>

      <v-divider thickness="1"> </v-divider>
      <div>
        <v-sheet class="d-flex" color="purple-lighten-5">
          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5"> Title</v-sheet>
          </v-col>
          <v-col cols="1">
            <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
              :</v-sheet
            >
          </v-col>
          <v-col cols="6">
            <v-sheet class="align-self-center">
              <v-text-field
                density="compact"
                variant="solo"
                single-line
                hide-details
                v-model="book_details.title"
              ></v-text-field>
            </v-sheet>
          </v-col>
        </v-sheet>
      </div>

      <div>
        <v-sheet class="d-flex" color="purple-lighten-5">
          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
              Author</v-sheet
            >
          </v-col>
          <v-col cols="1">
            <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
              :</v-sheet
            >
          </v-col>
          <v-col cols="6">
            <v-sheet class="align-self-center">
              <v-text-field
                density="compact"
                variant="solo"
                single-line
                hide-details
                v-model="book_details.author"
              ></v-text-field>
            </v-sheet>
          </v-col>
        </v-sheet>
      </div>
      <div>
        <v-sheet class="d-flex" color="purple-lighten-5">
          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
              Publication Date</v-sheet
            >
          </v-col>
          <v-col cols="1">
            <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
              :</v-sheet
            >
          </v-col>
          <v-col cols="6">
            <v-sheet class="align-self-center">
              <v-text-field
                density="compact"
                variant="solo"
                single-line
                hide-details
                v-model="book_details.publication_date"
              ></v-text-field>
            </v-sheet>
          </v-col>
        </v-sheet>
      </div>
      <div>
        <v-sheet class="d-flex" color="purple-lighten-5">
          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5"> ISBN</v-sheet>
          </v-col>
          <v-col cols="1">
            <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
              :</v-sheet
            >
          </v-col>
          <v-col cols="6">
            <v-sheet class="align-self-center">
              <v-text-field
                variant="solo"
                density="compact"
                single-line
                hide-details
                v-model="book_details.isbn"
              ></v-text-field>
            </v-sheet>
          </v-col>
        </v-sheet>
      </div>
      <div>
        <v-sheet class="d-flex" color="purple-lighten-5">
          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5"> UUID</v-sheet>
          </v-col>
          <v-col cols="1">
            <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
              :</v-sheet
            >
          </v-col>
          <v-col cols="6">
            <v-sheet class="align-self-center">
              <v-text-field
                variant="solo"
                density="compact"
                single-line
                hide-details
                v-model="book_details.uuid"
              ></v-text-field>
            </v-sheet>
          </v-col>
        </v-sheet>
      </div>
      <div>
        <v-sheet class="d-flex" color="purple-lighten-5">
          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5"> Genre</v-sheet>
          </v-col>
          <v-col cols="1">
            <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
              :</v-sheet
            >
          </v-col>
          <v-col cols="6">
            <v-sheet class="align-self-center">
              <v-combobox
                single-line
                hide-details
                variant="solo"
                v-model="value2"
                :items="genre"
                density="compact"
              ></v-combobox>
            </v-sheet>
          </v-col>
        </v-sheet>
      </div>
      <div>
        <v-sheet class="d-flex" color="purple-lighten-5">
          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
              Status of Availability</v-sheet
            >
          </v-col>
          <v-col cols="1">
            <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
              :</v-sheet
            >
          </v-col>
          <v-col cols="6">
            <v-sheet class="align-self-center">
              <v-combobox
                single-line
                hide-details
                variant="solo"
                v-model="value"
                :items="availability"
                density="compact"
              ></v-combobox>
            </v-sheet>
          </v-col>
        </v-sheet>
      </div>
      <div>
        <v-sheet class="d-flex" color="purple-lighten-5">
          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
              Synopsis</v-sheet
            >
          </v-col>
          <v-col cols="1">
            <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
              :</v-sheet
            >
          </v-col>
          <v-col cols="6">
            <v-sheet class="align-self-center">
              <v-text-field
                variant="solo"
                density="compact"
                single-line
                hide-details
                v-model="book_details.synopsis"
              ></v-text-field>
            </v-sheet>
          </v-col>
        </v-sheet>
      </div>
      <div>
        <v-sheet class="d-flex" color="purple-lighten-5">
          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
              Cover Image</v-sheet
            >
          </v-col>
          <v-col cols="1">
            <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
              :</v-sheet
            >
          </v-col>

          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
              <v-img
                contain
                height="300"
                src="https://sweetcherrypublishing.com/wp-content/uploads/2019/06/Sherlock-series-1-slipcase.jpg"
              >
              </v-img
            ></v-sheet>
          </v-col>

          <v-col cols="4">
            <v-sheet class="flex-column" color="purple-lighten-5">
              <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                <v-btn color="blue-accent-3">Upload Cover Image</v-btn></v-sheet
              >

              <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                <v-btn color="blue-grey-lighten-4"
                  >Remove Cover Image</v-btn
                ></v-sheet
              >
            </v-sheet>
          </v-col>
        </v-sheet>
      </div>
      <div>
        <v-sheet class="d-flex" color="purple-lighten-5">
          <v-col cols="3"> </v-col>
          <v-col cols="2"> </v-col>

          <v-col cols="2"> </v-col>

          <v-col cols="1">
            <v-sheet class="d-flex justify-end" color="purple-lighten-5">
              <v-sheet class="ma-2 pa-2 d-flex" color="purple-lighten-5">
                <v-btn color="green" @click="dialog2 = true" type="input"
                  >Confirm</v-btn
                ></v-sheet
              >
              <!---->
              <v-sheet class="ma-2 pa-2 d-flex" color="purple-lighten-5">
                <router-link
                  style="color: green; text-decoration: none"
                  to="/home-page"
                  replace
                  ><v-btn color="red" @click="dialog2 = false" type="input"
                    >Cancel</v-btn
                  ></router-link
                ></v-sheet
              >
            </v-sheet>
          </v-col>
        </v-sheet>
        <v-dialog v-model="dialog2" width="400">
          <v-card>
            <v-card-title> Are you sure want to edit this book? </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <router-link
                style="color: green; text-decoration: none"
                to="/home-page"
                replace
                @click="update_database()"
                ><v-btn
                  color="green"
                  variant="text"
                  @click="dialog2 = false"
                  type="input"
                >
                  Yes
                </v-btn></router-link
              >
              <v-btn
                color="red"
                variant="text"
                @click="dialog2 = false"
                type="input"
              >
                No
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    availability: ["Available", "Non-Available"],
    value: "Available",
    genre: ["Thriller", "Comedian", "Horror", "Romantic"],
    value2: "Thriller",
    visible: false,
    dialog: false,
    dialog2: false,
    dialog3: false,

    book_details: {
      // book: [],
      title: "",
      author: "",
      publication_date: "",
      isbn: "",
      uuid: "",
      genre: "",
      synopsis: "",
    },
  }),

  created() {
    this.bookUUID = this.$route.params.id;
    this.getBooks();
  },

  methods: {
    async getBooks() {
      try {
        const url = `https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book?uuid=${this.bookUUID}`;
        const res = await axios.get(url);
        this.bookList = res.data;
        console.log(res.data);

        this.book_details.title = res.data.title;
        this.book_details.author = res.data.author;
        this.book_details.publication_date = res.data.publication_date;
        this.book_details.isbn = res.data.isbn;
        this.book_details.uuid = res.data.uuid;
        this.book_details.genre = res.data.genre;
        this.book_details.synopsis = res.data.synopsis;

        console.log(this.book_details);
      } catch (e) {
        console.log(e);
      }
    },
    async update_database() {
      try {
        const payload = {
          title: this.book_details.title,
          author: this.book_details.author,
          publication_date: this.book_details.publication_date,
          isbn: this.book_details.isbn,
          uuid: this.book_details.uuid,
          genre: this.book_details.genre,
          synopsis: this.book_details.synopsis,
        };
        const url =
          "https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book";
        const result = await axios.put(url, payload);
        console.log(result.data);
      } catch (e) {
        console.log(e.response.data);
      }
    },
  },
};
</script>
