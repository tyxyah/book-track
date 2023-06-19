<template>
  <v-card
    height="90"
    color="indigo-lighten-5"
    class="rounded-0"
    elevation="0"
    width="100%"
  >
    <v-container justify="center" align="center">
      <v-card
        width="100%"
        color="indigo-lighten-5"
        elevation="0"
        class="justify-start rounded-0 pa-2 ma-1"
      >
        <v-row align="center">
          <v-sheet
            class="pa-2 ma-1"
            color="indigo-lighten-5"
            density="compact"
            width="5%"
          >
            <router-link
              style="color: white; text-decoration: none"
              to="/home-page"
              replace
              ><v-row>
                <v-img
                  height="50"
                  width="90"
                  src="https://booktrack.app/wp-content/uploads/2022/08/book-track-app-icon.webp"
                ></v-img>
                <div class="myFont" align="center">BookTrack</div>
              </v-row></router-link
            >
          </v-sheet>
          <v-spacer></v-spacer>
          <v-card
            width="50%"
            color="indigo-lighten-5"
            class="justify-start rounded-0 pa-2 ma-1"
            elevation="0"
            ><v-text-field
              :loading="loading"
              density="compact"
              variant="solo"
              label="Search Book"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              @click:append-inner="onClick"
              type="input"
              v-model="searchQuery"
            ></v-text-field
          ></v-card>

          <v-sheet
            class="ml-2 pa-2"
            color="indigo-lighten-5"
            density="conformtable"
            width="12%"
          >
            <router-link
              style="color: white; text-decoration: none"
              to="/log-in"
              replace
              ><v-btn>Log Out</v-btn></router-link
            >
                 </v-sheet
          >
        </v-row></v-card
      >
    </v-container>
  </v-card>

  <v-container align="center">
    <v-card width="100%" color="white" elevation="0">
      <div class="d-flex">
        <div class="ma-1 pa-1 me-auto">Collection of Booktrack's Member</div>
        <div class="ma-1 pa-1">
          <router-link
            style="color: white; text-decoration: none"
            to="/add-book"
          >
            <v-btn color="#278fa3" icon="mdi-plus" height="35px" width="35px">
              <v-icon color="white">mdi-plus</v-icon></v-btn
            ></router-link
          >
        </div>
      </div>
    </v-card></v-container
  >

  <!------------------>

  <v-container justify="center" align="center"
    ><v-card width="100%" color="white">
      <v-container></v-container>
      <v-row
        justify="center"
        align="center"
        v-for="rowIdx in Math.ceil(bookList.length / 4)"
      >
        <v-col
          v-for="item in filteredItems.slice(4 * (rowIdx - 1), 4 * rowIdx)"
          :key="item.uuid"
        >
          <v-img
            :contain="true"
            height="200"
            :src="
              item.image_url
                ? item.image_url
                : '/src/assets/no.png'
            "
          ></v-img>
          <v-container align="center">
            <v-dialog v-model="dialog" width="auto">
              <template v-slot:activator="{ props }">
                <v-btn
                  variant="text"
                  color="black-lighten-2"
                  v-bind="props"
                  @click="redirectIDToDetailPage(item.uuid)"
                >
                  {{ item.title }}
                </v-btn>
              </template>
            </v-dialog>
          </v-container>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-card>
  </v-container>
  <v-container></v-container>
</template>

<script>
import axios from "axios";
import BookCard from "./BookCard.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      checkbox: false,
      visible: false,
      dialog: false,
      searchQuery: "",
      bookList: [],
      selectedItem: null,
      showBookCard: false,
      image_name: "",
    };
  },

  created() {
    this.getBooks();
    this.checkURL();
    this.getImage();
  },

  components: {
    BookCard,
  },

  computed: {
    filteredItems() {
      const searchQuery = this.searchQuery.toLowerCase();
      return this.bookList.filter((item) =>
        item.title.toLowerCase().includes(searchQuery)
      );
    },
  },

  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },

    closeDialog(item) {
      item.dialog = false;
    },

    redirectIDToDetailPage(id) {
      this.$router.push(`/product/${id}`);
      console.log(this.$route);
    },

    selectItem(item) {
      this.selectedItem = item;
    },

    async getBooks() {
      try {
        const url =
          "https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book/list";
        const res = await axios.get(url);
        this.bookList = res.data.Items;
        console.log(res.data.Items, "book data obtain succeed");

        for (const book of this.bookList) {
          let image_name = null;
          if (book.image_name) {
            console.log(book.image_name, "image obtained successfully");
            image_name = await this.getImage(book.image_name);
            console.log(image_name);
            book.image_url = image_name;
          } else {
            console.log("No image available for book", book.title);
          }
        }
      } catch (e) {
        console.log(e);
      }
    },

    async getImage(image_name) {
      try {
        const getSignedUrl = `https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book/image?image_name=${image_name}`;
        const res = await axios.get(getSignedUrl);
        console.log(res.data, "image url");
        return res.data.get_presigned_url;
      } catch (e) {
        console.log(e);
        return "";
      }
    },

    async generateUploadPresignedUrl(imageName) {
      try {
        console.log("starting to generate presigned url");

        const res = await axios.post(
          `https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book/image?image_name=${imageName}`
        );
        console.log(res.data, "WOIII");
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

    async checkURL() {
      try {
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
      }
    },
  },
};
</script>

<style>
.myFont {
  font-family: "Gabriola", serif;
  color: black;
  position: absolute;
  top: 14%;
  width: 24%;
  font-size: 30px;
}
</style>
