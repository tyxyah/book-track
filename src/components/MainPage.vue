<template>
  <v-card height="90" color="primary">
    <div class="d-flex" color="primary">
      <v-col cols="1"> </v-col>
      <v-col cols="2">
        <v-sheet class="pa-2" color="primary" density="compact">
          <router-link
            style="color: white; text-decoration: none"
            to="/home-page"
            replace
            ><v-btn flat style="background-color: transparent" type="input">
              <v-card-title style="color: white">BookTrack</v-card-title>
            </v-btn></router-link
          ></v-sheet
        >
      </v-col>
      <v-col cols="6">
        <v-sheet class="ma-1 pa-2" color="primary">
          <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            placeholder="Search from your collection..."
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
            type="input"
            v-model="searchQuery"
          ></v-text-field>
        </v-sheet>
      </v-col>

      <v-spacer></v-spacer>
      <v-col cols="4">
        <div class="d-flex">
          <v-sheet class="ma-2 pa-2" color="primary">
            <v-checkbox
              color="black"
              density="compact"
              label=": Availability"
              v-model="checkbox"
              type="checkbox"
            >
            </v-checkbox>
          </v-sheet>
          <v-sheet class="ma-2 pa-2" color="primary">
            <router-link
              style="color: black; text-decoration: none"
              to="/search-book"
              replace
              ><v-btn type="input"> Search </v-btn></router-link
            >
          </v-sheet>
          <v-sheet class="ml-2 pa-2" color="primary">
            <router-link
              style="color: black; text-decoration: none"
              to="/log-in"
              replace
              ><v-btn icon color="white"
                ><v-icon>mdi-logout</v-icon></v-btn
              ></router-link
            >
          </v-sheet>
        </div>
      </v-col>
    </div>
  </v-card>
  <v-container> </v-container>

  <!--Add Book Button-->
  <v-row justify="end" margin-right="500px">
    <router-link style="color: black; text-decoration: none" to="/add-book">
      <v-btn color="blue" icon="mdi-plus" size="small">
        <v-icon>mdi-plus</v-icon></v-btn
      >
    </router-link>
  </v-row>
  <!------------------>

  <v-container>
    <v-row v-for="rowIdx in Math.ceil(bookList.length / 5)">
      <v-col
        v-for="item in filteredItems.slice(5 * (rowIdx - 1), 5 * rowIdx)"
        :key="item.uuid"
      >
        <v-img
          :contain="true"
          height="200"
          src="https://m.media-amazon.com/images/I/51x3kjQd6hL.jpg"
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
  </v-container>
  <v-container></v-container>
</template>

<script>
import axios from "axios";
import BookCard from "./BookCard.vue";
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
    };
  },

  created() {
    this.getBook();
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

    async getBook() {
      try {
        const url =
          "https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book/list";
        const res = await axios.get(url);
        this.bookList = res.data.Items;
        console.log(res.data.Items);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
