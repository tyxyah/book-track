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
              Cover Image
            </v-sheet>
          </v-col>
          <v-col cols="1">
            <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
              :
            </v-sheet>
          </v-col>

          <v-col cols="3">
            <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
              <v-img
                contain
                height="300"
                :src="
                  book_details.image_name
                    ? book_details.image_name
                    : '../../src/assets/image-not-available.jpeg'
                "
              >
              </v-img>
            </v-sheet>
          </v-col>

          <v-col cols="4">
            <v-sheet class="flex-column" color="purple-lighten-5">
              <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  @change="onUploadImage($event)"
                />
              </v-sheet>
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
                <v-btn color="green" @click="dialog2 = true" type="input">
                  Confirm
                </v-btn>
              </v-sheet>
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
                style="color: blueviolet; text-decoration: none"
                to="/home-page"
                replace
                ><v-btn
                  color="blue"
                  variant="text"
                  @click="update_database()"
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
import { v4 as uuidv4 } from "uuid";

export default {
  data: () => ({
    value: "Available",
    genre: [
      "Thriller",
      "Comedy",
      "Horror",
      "Romance",
      "Fantasy",
      "Mystery",
      "Young Adult",
      "Adventure",
      "Contemporary",
      "History",
      "Children's Literature",
      "Biography",
      "Poetry",
      "Literary fiction",
      "Science Fiction",
      "Non-Fiction",
      "Fairy Tale",
      "Spirituality",
      "Travel",
    ],
    value2: "Thriller",
    visible: false,
    dialog: false,
    dialog2: false,
    dialog3: false,
    uploadedFile: null,

    book_details: {
      title: "",
      author: "",
      publication_date: "",
      isbn: "",
      uuid: "",
      genre: "",
      synopsis: "",
      image_name: "",
    },
  }),

  created() {
    this.bookUUID = this.$route.params.id;
    this.getBooks();
  },

  methods: {
    onUploadImage(event) {
      console.log("on upload image", event.target.files);
      this.uploadedFile = event.target.files[0];
      this.book_details.image_name = URL.createObjectURL(event.target.files[0]);
    },
    async getImage(image_name) {
      try {
        const getSignedUrl = `https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book/image?image_name=${image_name}`;
        const res = await axios.get(getSignedUrl);
        return res.data.get_presigned_url;
      } catch (e) {
        console.log(e);
        return "";
      }
    },

    async getBooks() {
      try {
        const url = `https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book?uuid=${this.bookUUID}`;
        const res = await axios.get(url);

        let image_name = null;
        if (res.data?.image_name) {
          image_name = await this.getImage(res.data.image_name);
        }

        this.book_details.title = res.data.title;
        this.book_details.author = res.data.author;
        this.book_details.publication_date = res.data.publication_date;
        this.book_details.isbn = res.data.isbn;
        this.book_details.uuid = res.data.uuid;
        this.book_details.genre = res.data.genre;
        this.book_details.synopsis = res.data.synopsis;
        this.book_details.image_name = image_name;
      } catch (e) {
        console.log(e);
      }
    },
    async generateUploadPresignedUrl(imageName) {
      try {
        console.log("starting to generate presigned url");

        const res = await axios.post(
          `https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book/image?image_name=${imageName}`
        );
        return res.data.upload_presigned_url;
      } catch (e) {
        console.log("error generating presigned url", e);
        return null;
      }
    },
    renameFile(file, newFileName) {
      const blob = file.slice(0, file.size, file.type);

      return new File([blob], `${newFileName}.${file.type.split("/").pop()}`, {
        type: file.type,
      });
    },
    async update_database() {
      try {
        let payload = {
          title: this.book_details.title,
          author: this.book_details.author,
          publication_date: this.book_details.publication_date,
          isbn: this.book_details.isbn,
          uuid: this.book_details.uuid,
          genre: this.book_details.genre,
          synopsis: this.book_details.synopsis,
        };

        if (this.uploadedFile !== null) {
          const image = this.renameFile(this.uploadedFile, uuidv4());
          const uploadPresignedUrl = await this.generateUploadPresignedUrl(
            image.name
          );

          console.log("the image", image, typeof image);
          console.log("start upload image with the url", uploadPresignedUrl);
          await axios.put(uploadPresignedUrl, image);
          console.log("end upload image");

          payload = {
            ...payload,
            image_name: image.name,
          };
        }

        const url =
          "https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book";

        console.log("start update db");
        const result = await axios.put(url, payload);
        console.log("end update db");
        console.log(result.data);
        this.dialog2 = false;
      } catch (e) {
        console.log(e);
        console.log(e.response.data);
      }
    },
  },
};
</script>
