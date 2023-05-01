<template>
  <div >
    <v-sheet class="bg-indigo-lighten-5 pa-14" >
      <v-row justify="space-around">
    <v-img
      class="mx-auto"
      max-width="600"
      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >

      <div class="text-subtitle-1 text-medium-emphasis"><strong>Book Club Member ID</strong></div>

      <v-text-field
        density="compact"
        placeholder="Member ID"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between ">
       <strong>Password</strong>

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot password?</a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>

      <v-btn
        block
        class="mb-5"
        color="purple"
        size="large"
        variant="tonal"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    
    </v-card>
    </v-row>
  </v-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      visible: false,
    }),
  }
</script>