<template>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
          v-model="email"
          :rules="rules"
          label="Email"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2">Confirm</v-btn>
        <v-btn type="cancel" block class="mt-2">Cancel</v-btn>
      </v-form>
    </v-sheet>
  </template>
  
  <script>
  export default {
    data: () => ({
      email: '',
      rules: [
        value => {
          if (value) return true

          return 'You must enter your email.'
        },
      ],
    }),
  }
</script>