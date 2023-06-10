<template>
  <v-sheet class="bg-indigo-lighten-5 pa-16 mx-auto" width="auto" height="1340">
    <span class="font-weight-bold text-h6">CREATE AN ACCOUNT</span>
    <v-divider></v-divider>
    <v-card
      class="mx-auto mt-10 px-11 pb-12 pt-7"
      max-width="500"
      rounded
      elevation="8"
    >
      <v-card-title class="mb-5"> Sign up for Book Track </v-card-title>

      <form @submit.prevent="submit">
        <v-text-field
          v-model="id.value.value"
          :counter="10"
          :error-messages="id.errorMessage.value"
          label="Book Club Member ID"
          type="input"
          density="comfortable"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="phone.value.value"
          :counter="7"
          :error-messages="phone.errorMessage.value"
          label="Phone Number"
          type="input"
          density="comfortable"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail Address"
          type="input"
          variant="outlined"
          density="comfortable"
        ></v-text-field>

        <v-text-field
          v-model="pass.value.value"
          :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
          :type="visible ? 'text' : 'password'"
          :items="items"
          :error-messages="conPass.errorMessage.value"
          label="Password"
          @click:append="visible = !visible"
          type="input"
          density="comfortable"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="conPass.value.value"
          :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
          :type="visible ? 'text' : 'password'"
          :items="items"
          :error-messages="conPass.errorMessage.value"
          label="Confirmation Password"
          @click:append="visible = !visible"
          type="input"
          density="comfortable"
          variant="outlined"
        ></v-text-field>

        <v-checkbox
          v-model="checkbox.value.value"
          :error-messages="checkbox.errorMessage.value"
          value="1"
          label="I agree with the terms and conditions"
          type="checkbox"
        ></v-checkbox>

        <v-btn class="me-4" color="success" type="submit" @click="submit">
          submit
        </v-btn>

        <v-dialog v-model="dialog" persistent width="auto">
          <template v-slot:activator="{ props }"></template>
          <v-card>
            <v-card-text>
              You have successfully created your account.
            </v-card-text>
            <v-card-actions>
              <router-link
                style="color: blue; text-decoration: none"
                to="/log-in"
                replace
              >
                <v-btn style="margin-left: 85%" type="submit" block="">
                  Back to Login
                </v-btn></router-link
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <router-link
          style="color: black; text-decoration: none"
          to="/log-in"
          replace
        >
          <v-btn type="cancel" class="me-4" color="error" @click="handleReset">
            cancel
          </v-btn></router-link
        >
      </form>
    </v-card>
  </v-sheet>
</template>

<script>
import { useField, useForm } from "vee-validate";
import { ref } from "vue";
import axios from "axios";

export default {
  data: () => ({
    visible: false,
    dialog: false,
    formValidated: false,
  }),

  setup() {
    const dialog = ref(false);
    const { handleReset, handleSubmit } = useForm({
      validationSchema: {
        id(value) {
          if (value?.length >= 2) return true;
          else return "ID needs to be at least 2 characters.";
        },
        phone(value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true;
          else return "Phone number needs to be at least 9 digits.";
        },
        email(value) {
          if (/^[a-z0-9.-]+@[a-z.-]+\.[a-z]+$/.test(value)) return true;
          else return "Must be a valid e-mail.";
        },
        // password(value) {
        //   if (value) return "This field must not be empty.";
        //   else return true ;

        //   // } else if (/^[a-z0-9.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) {
        //   //   return true;
        //   // } else {
        //   //   return "Password must be at least 8 characters.";
        //   // }
        // },
        conPass(value) {
          if (!value) return "This field is required.";
          else if (value === pass.value.value) return true;
          else return "Passwords do not match.";
        },

        checkbox(value) {
          if (value === "1") return true;
          else return "Please tick the terms and conditions.";
        },
      },
    });

    const id = useField("id");
    const phone = useField("phone");
    const email = useField("email");
    const pass = useField("pass");
    const conPass = useField("conPass");
    const checkbox = useField("checkbox");

    const submitAnjenk = async () => {
      try {
        const url =
          "https://8643dwkn0a.execute-api.ap-southeast-2.amazonaws.com/dev/user";

        const member_id = JSON.stringify(id.value.value);
        const email2 = JSON.stringify(email.value.value);
        const pass2 = JSON.stringify(conPass.value.value);
        const phone2 = JSON.stringify(phone.value.value);

        const payload = {
          member_id: JSON.parse(member_id),
          email: JSON.parse(email2),
          password: JSON.parse(pass2),
          phone: JSON.parse(phone2),
        };
        console.log(payload);
        const res = await axios.post(url, payload);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    const submit = handleSubmit((values) => {
      submitAnjenk();
      dialog.value = true;
    });

    return {
      id,
      phone,
      email,
      pass,
      conPass,
      checkbox,
      submit,
      handleReset,
      dialog,
    };
  },
};
</script>
