<template>
  <q-form @submit="onSubmit" class="q-gutter-md">
    <q-input dense outlined v-model="email" type="email" label="Email" />
    <q-input dense outlined v-model="username" type="text" label="Username" />
    <q-input dense outlined v-model="firstName" type="text" label="Firstname" />
    <q-input dense outlined v-model="lastName" type="text" label="Lastname" />

    <q-input
      dense
      outlined
      v-model="password"
      type="password"
      label="Password"
    />
    <q-input
      outlined
      v-model="c_password"
      dense
      type="password"
      label="Confirm Password"
    />
    <div>
      <q-btn
        class="full-width"
        label="Create Account"
        type="submit"
        color="black"
        :disable="!clientFormIsValid"
      />
    </div>
  </q-form>
</template>

<script>
/* eslint-disable operator-linebreak */
import { defineComponent } from 'vue';

const ClientForm = defineComponent({
  name: 'ClientForm',
  data() {
    return {
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      c_password: '',
    };
  },
  computed: {
    clientFormIsValid() {
      if (
        this.email &&
        this.username &&
        this.firstName &&
        this.lastName &&
        this.password &&
        this.password === this.c_password
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    onSubmit() {
      const payload = {
        email: this.email,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
      };
      this.$emit('submitted', payload);
    },
  },
});
export default ClientForm;
</script>
