<template>
    <div>
        <v-card class="mx-auto" width="800" color="#385F73" theme="dark">
            <template v-slot:title> The Sherlock Holmes </template>

            <v-card-actions>
                <v-container>
                    <v-row justify="start" align="center">
                        <v-col cols="4">
                            <v-img contain height="400"
                                src="https://sweetcherrypublishing.com/wp-content/uploads/2019/06/Sherlock-series-1-slipcase.jpg">
                            </v-img>
                        </v-col>
                        <v-col>
                            <v-card-text> Author: Sir Arthur Conan Doyle </v-card-text>
                            <v-card-text> Publication Date: 2010 </v-card-text>
                            <v-card-text> ISBN: 9781782264088 </v-card-text>
                            <v-card-text> Genre: Mystery </v-card-text>
                            <v-card-text> Status of availbility: Available </v-card-text>
                            <v-card-text>
                                Synopsis:
                                <div class="text--primary">
                                    Seven years ago a disturbing incident took place in the

                                    village of Abbas Parva. Mr Ronder, owner of Ronder’s Wild
                                    Animals Show, met his end after an escaped lion attacked him.
                                    Holmes is confronted with an old mystery when he is summoned
                                    to visit a lady who refuses to show her face. A grisly crime
                                    committed seven years ago has had terrible consequences, and
                                    it is up to Holmes to save the veiled lodger from her own
                                    conscience.
                                </div>
                            </v-card-text>
                        </v-col>
                    </v-row>

                    <v-btn color="black-lighten-2" @click="goToCincau"> 
                        <router-link style="color: white; text-decoration: none;" to="/book-edit" replace> Edit </router-link> </v-btn>
                    
                    <!-- <router-link to="/button" replace> Cincau </router-link> -->

                    <v-dialog v-model="dialog" width="auto">
                        <template v-slot:activator="{ props }">
                            <v-btn color="black-lighten-2" v-bind="props"> Delete </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Confirm to delete book?</span>
                            </v-card-title>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="green-darken-1" variant="text" @click="dialog = true">
                                    
                                    <router-link style="color: green; text-decoration: none;" to="/" replace> Confirm </router-link>
                                </v-btn>
                                <v-btn color="green-darken-1" variant="text" @click="dialog = false">
                                    Cancel
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-container>
            </v-card-actions>
        </v-card>
    </div>

    <v-container>
        <v-row justify="center" align="center">
            <v-col>
                <v-img contain height="200"
                    src="https://sweetcherrypublishing.com/wp-content/uploads/2019/06/Sherlock-series-1-slipcase.jpg">
                </v-img>
                <v-container align="center"> Book Name </v-container>
            </v-col>

            <v-col>
                <v-img contain height="200" src="https://m.media-amazon.com/images/I/51x3kjQd6hL.jpg">
                </v-img>
                <v-container align="center"> Book Name </v-container>
            </v-col>

            <v-col>
                <v-img contain height="200"
                    src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781847496164.jpg">
                </v-img>
                <v-container align="center"> Book Name </v-container>
            </v-col>

            <v-col>
                <v-img contain height="200"
                    src="https://cdn.shopify.com/s/files/1/0601/0883/2974/products/sherlock-holmes-the-adventures-of-sherlock-holmes-9780755334353-3828246741036.jpg?v=1648785258">
                </v-img>
                <v-container align="center"> Book Name </v-container>
            </v-col>

            <v-col>
                <v-img contain height="200"
                    src="https://kbimages1-a.akamaihd.net/9249191b-78b7-497b-aeb7-ea2201969042/1200/1200/False/the-memoirs-of-sherlock-holmes-192.jpg">
                </v-img>
                <v-container align="center"> Book Name </v-container>
            </v-col>
        </v-row>

        <v-row justify="center" align="center">
            <v-col>
                <v-img contain height="200" src="https://m.media-amazon.com/images/I/51x3kjQd6hL.jpg">
                </v-img>
                <v-container align="center"> Book Name </v-container>
            </v-col>

            <v-col>
                <v-img contain height="200"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8bcWrZiSfVi3rAwKPOOHT-2ghCQxXb2-86ApvLz41qeQwRHaxzyQhrWBVfu5S3ymqvs&usqp=CAU">
                </v-img>
                <v-container align="center"> Book Name </v-container>
            </v-col>

            <v-col>
                <v-img contain height="200"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaCvo5g4JhUQENH0cYq0AhlH2uwCueTX8lU-fv9fXGra2t806ZEiIwpY4aneao0qped4&usqp=CAU">
                </v-img>
                <v-container align="center"> Book Name </v-container>
            </v-col>

            <v-col>
                <v-img contain height="200"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFKXAUAtUJ2K8wgLasYAunpOSrsAfWQp0BZyhk2BFvC290A9tHJ1fxSuqR33IpSNVePQ&usqp=CAU">
                </v-img>
                <v-container align="center"> Book Name </v-container>
            </v-col>

            <v-col>
                <v-img contain height="200"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpb_uSyLBwkzXONdx8OaqDxaJdPQOib0mhcSMKR2-TUi3vn3NdEcAsyOmkYyrtpmcvghQ&usqp=CAU">
                </v-img>
                <v-container align="center"> Book Name </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        visible: false,
        dialog: false,
        dialog2: false,
    }),
    methods: {
        goToCincau() {
            console.log("this is cincau")
        },
    }
};
</script>