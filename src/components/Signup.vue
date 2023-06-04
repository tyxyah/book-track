<template>
  <v-sheet class="bg-indigo-lighten-5 pa-16 mx-auto " width="auto" height="1340">
    <span class="font-weight-bold text-h6">CREATE AN ACCOUNT</span>
    <v-divider></v-divider>
    <v-card class="mx-auto mt-10 px-11 pb-12 pt-7" max-width="500" rounded elevation="8">
      <v-card-title class="mb-5">
        Sign up for Book Track
      </v-card-title>

      <form @submit.prevent="submit">
        <v-text-field v-model="id.value.value" :counter="10" :error-messages="id.errorMessage.value"
          label="Book Club Member ID" type="input" density="comfortable" variant="outlined"></v-text-field>

        <v-text-field v-model="phone.value.value" :counter="7" :error-messages="phone.errorMessage.value"
          label="Phone Number" type="input" density="comfortable" variant="outlined"></v-text-field>

        <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" label="E-mail Address"
          type="input" variant="outlined" density="comfortable"></v-text-field>

        <v-text-field v-model="pass.value.value" :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
          :type="visible ? 'text' : 'password'" :items="items" :error-messages="pass.errorMessage.value" label="Password"
          @click:append="visible = !visible" type="input" density="comfortable" variant="outlined"></v-text-field>

        <v-text-field v-model="conPass.value.value" :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
          :type="visible ? 'text' : 'password'" :items="items" :error-messages="conPass.errorMessage.value"
          label="Confirmation Password" @click:append="visible = !visible" type="input" density="comfortable" variant="outlined"></v-text-field>


        <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value" value="1"
          label="I agree with the terms and conditions" type="checkbox"></v-checkbox>

        <v-btn class="me-4" type="submit" color="success" @click="dialog = true">
          submit
        </v-btn>

        
        <v-dialog v-model="dialog" persistent width="auto">
          <template v-slot:activator="{ props }"></template>
          <v-card>
            <v-card-text>
              You have successfully created your account.
            </v-card-text>
            <v-card-actions>
              <router-link style=" color:blue; text-decoration: none;" to="/log-in" replace>
                <v-btn style="margin-left: 85%;" type="submit" block="">
                  Back to Login
                </v-btn></router-link>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
        <router-link style=" color:black; text-decoration: none;" to="/log-in" replace>
          <v-btn type="cancel" class="me-4" color="error" @click="handleReset">
            cancel
          </v-btn></router-link>
      </form>
    </v-card>
  </v-sheet>
</template>
  
<script>
import { useField, useForm } from 'vee-validate'
export default {
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        id(value) {
          if (value?.length >= 2) return true

          return 'ID needs to be at least 2 characters.'
        },
        phone(value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true

          return 'Phone number needs to be at least 9 digits.'
        },
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Must be a valid e-mail.'
        },
        password(value) {
          if (value?.length > 7 && /[0-9-]+/.test(value)) return true
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
          return 'Password must at least 8 characters.'
        },
        conPass(value) {
          if (value?.length > 7 && /[0-9-]+/.test(value)) return true
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
          return 'Password not match.'
        },
        checkbox(value) {
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
  data: () => ({
    visible: false,
    dialog: false,
  }),
}
</script>
