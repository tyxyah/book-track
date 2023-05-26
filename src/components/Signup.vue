<template>

  <v-sheet width="800" class="mx-auto">
    <v-sheet class="bg-indigo-lighten-5 pa-16" rounded>
      <v-card class="mx-auto px-8 py-10" max-width="600">
      <v-card-title>
        Sign up for Book Track
      </v-card-title>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="id.value.value"
        :counter="10"
        :error-messages="id.errorMessage.value"
        label="Book Club Member ID"
      ></v-text-field>
  
      <v-text-field
        v-model="phone.value.value"
        :counter="7"
        :error-messages="phone.errorMessage.value"
        label="Phone Number"
        
      ></v-text-field>
  
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail Address"
      ></v-text-field>
  
      <v-text-field
    v-model="pass.value.value"
    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
    :type="show1 ? 'text' : 'password'"
    :items="items"
    :error-messages="pass.errorMessage.value"
    label="Password"
    counter
          @click:append="show1 = !show1"
  ></v-text-field>
  
  <v-text-field
    v-model="conPass.value.value"
    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
    :type="show1 ? 'text' : 'password'"
    :items="items"
    :error-messages="conPass.errorMessage.value"
    label="Confirmation Password"
    counter
          @click:append="show1 = !show1"
  ></v-text-field>
  
      <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        value="1"
        label="I agree with the terms and conditions"
        type="checkbox"
      ></v-checkbox>
  
      <v-btn
        class="me-4"
        type="submit"
      >
        submit
      </v-btn>
  
      <v-btn @click="handleReset"><router-link style=" color:black; text-decoration: none;" to="/log-in" replace>
        cancel
      </router-link></v-btn>
    </form>
    </v-card>
  </v-sheet>
  </v-sheet>
  </template>
  
  <script>
    import { useField, useForm } from 'vee-validate'
    export default {
      setup () {
        const { handleSubmit, handleReset } = useForm({
          validationSchema: {
            id (value) {
              if (value?.length >= 2) return true
  
              return 'ID needs to be at least 2 characters.'
            },
            phone (value) {
              if (value?.length > 9 && /[0-9-]+/.test(value)) return true
  
              return 'Phone number needs to be at least 9 digits.'
            },
            email (value) {
              if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
  
              return 'Must be a valid e-mail.'
            },
            password (value) {
              if (value?.length > 7 && /[0-9-]+/.test(value)) return true
              if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
              return 'Password must at least 8 characters.'
            },
            conPass (value) {
              if (value?.length > 7 && /[0-9-]+/.test(value)) return true
              if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
              return 'Password not match.'
            },
            checkbox (value) {
              if (value === '1') return true
  
              return 'Please tick the terms and conditions.'
            },
          },

        })
        const id = useField('id')
        const phone = useField('phone')
        const email = useField('email')
        const pass = useField('pass')
        const conPass = useField('conPass')
        const checkbox = useField('checkbox')
  
        const submit = handleSubmit(values => {
          alert(JSON.stringify(values, null, 2))
        })
        return { id, phone, email, pass, conPass, checkbox, submit, handleReset }
      },

     
    }
  </script>