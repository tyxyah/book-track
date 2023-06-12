<template>
    <v-row justify="center">
        <v-card width="940" color="purple-lighten-5" rounded="100" density="compact">
            <div class="d-flex align-center">
                <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
                    <v-card-title>Adding a new book</v-card-title>
                </v-sheet>
                <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                    <router-link style="color: black; text-decoration: none" to="/home-page" replace>
                        <v-btn icon="$close" height="30" width="30" variant="text" type="input"><v-icon>mdi-close</v-icon>
                        </v-btn></router-link>
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
                            :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field density="compact" variant="solo" single-line hide-details type="input"
                                v-model="title"></v-text-field>
                        </v-sheet>
                    </v-col>
                </v-sheet>
            </div>

            <div>
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                            Author</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
                            :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field density="compact" variant="solo" single-line hide-details type="input"
                                v-model="author"></v-text-field>
                        </v-sheet>
                    </v-col>
                </v-sheet>
            </div>
            <div>
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                            Publication Date</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
                            :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field density="compact" variant="solo" single-line hide-details type="date"
                                v-model="publication_date"></v-text-field>
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
                            :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field variant="solo" density="compact" single-line hide-details type="input"
                                v-model="isbn"></v-text-field>
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
                            :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field variant="solo" density="compact" single-line hide-details type="input"
                                v-model="uuid"></v-text-field>
                        </v-sheet>
                    </v-col>
                </v-sheet>
            </div>
            <div>
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2" color="purple-lighten-5">Genre</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
                            :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-combobox single-line hide-details variant="solo" v-model="genre" :items="genre_list"
                                density="compact" type="input"></v-combobox>
                        </v-sheet>
                    </v-col>
                </v-sheet>
            </div>
            <div>
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                            Status of Availability</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
                            :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-combobox single-line hide-details variant="solo" v-model="availability"
                                :items="availability_list" density="compact" type="input"></v-combobox>
                        </v-sheet>
                    </v-col>
                </v-sheet>
            </div>
            <div>
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                            Synopsis</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">
                            :</v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="align-self-center">
                            <v-text-field variant="solo" density="compact" single-line hide-details type="input"
                                v-model="synopsis"></v-text-field>
                        </v-sheet>
                    </v-col>
                </v-sheet>
            </div>

            <div>
                <v-sheet class="d-flex" color="purple-lighten-5">
                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2" color="purple-lighten-5">Cover Image</v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-sheet class="ma-2 pa-2 me-auto" color="purple-lighten-5">:</v-sheet>
                    </v-col>

                    <v-col cols="3">
                        <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                            <v-img contain height="300" :src="coverImageUrl"></v-img>
                        </v-sheet>
                    </v-col>

                    <v-col cols="4">
                        <v-sheet class="flex-column" color="purple-lighten-5">
                            <v-sheet class="ma-2 pa-2" color="purple-lighten-5">
                                <v-btn color="blue-accent-3" type="input" @click="chooseFiles">
                                    Upload Cover Image
                                    <input id="coverImageFile" type="file" accept="image/png, image/jpeg, image/bmp"
                                        style="display: none;">
                                </v-btn>
                            </v-sheet>
                        </v-sheet>
                    </v-col>
                </v-sheet>
            </div>

            <v-sheet class="d-flex" color="purple-lighten-5">
                <v-col cols="3"> </v-col>
                <v-col cols="2"> </v-col>

                <v-col cols="2"> </v-col>

                <v-col cols="1">
                    <v-sheet class="d-flex justify-end" color="purple-lighten-5">
                        <v-sheet class="ma-2 pa-2 d-flex" color="purple-lighten-5">
                            <v-btn color="green" @click="dialog2 = true" type="input">Add Book
                            </v-btn></v-sheet>
                        <v-sheet class="ma-2 pa-2 d-flex" color="purple-lighten-5">
                            <router-link style="color: blueviolet; text-decoration: none" to="/home-page" replace><v-btn
                                    color="red" type="input">Cancel</v-btn></router-link></v-sheet>
                    </v-sheet>
                </v-col>
            </v-sheet>
            <div>
                <v-dialog v-model="dialog2" width="400">
                    <v-card>
                        <v-card-title> Are you sure want to add this book? </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <router-link style="color: blueviolet; text-decoration: none" to="/home-page" replace><v-btn
                                    color="blue-darken-1" variant="text" @click="addBook" type="input">
                                    Yes
                                </v-btn></router-link>
                            <v-btn color="primary" variant="text" @click="dialog2 = false" type="input">
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
    data() {
        return {
            title: "",
            author: "",
            publication_date: "",
            isbn: "",
            uuid: "",
            synopsis: "",
            genre: "",
            coverImageFile: null,
            coverImageUrl: "",
            availability_list: ["Available", "Non-Available"],
            availability: "Available",
            genre_list: ["Thriller", "Comedian", "Horror", "Romantic"],
            previewImage: null,

        };
    },
    methods: {
    
        //Get URL
        async getURL() {
            const preSignedURL = 'https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book/image';
            const coverImageUrlURL = await axios.get(preSignedURL);
        }

    //Upload image
    //Assign url to image?
    async chooseFiles() {
           
                document.getElementById("coverImageFile").click();
                const fd = new FormData();
                fd.append("image", this.coverImageFile, this.coverImageFile.name);
                //fd.onchange = (event) => {
                //this.coverImageFile = event.target.files[0];
                //this.previewImage = URL.createObjectURL(this.coverImageFile);
            } catch (error) {
                console.error(error);
            }
        }

    // onUpload(){
    //     const fd = new FormData();
    //     fd.append('image', this.document, this.document.name)
    //     axios.put('https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book/image')
    // },

    async addBook() {
            try {
                const url = "https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/book";
                const payload = {
                    title: this.title,
                    author: this.author,
                    publication_date: this.publication_date,
                    isbn: this.isbn,
                    uuid: this.uuid,
                    synopsis: this.synopsis,
                    availability: this.availability,
                    genre: this.genre
                }
                const res = await axios.post(url, payload)
                console.log(res.data);
            }
            catch (e) {
                console.log(e);
            }
        }
    },
};
</script>
