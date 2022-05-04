<template>
  <q-card class="clientProfileForm">
    <q-card-section>
      <q-form @submit="handleSubmit" class="q-gutter-md">
        <q-input
          dense
          v-model="form.email"
          type="email"
          label="Email"
          outlined
        />
        <q-input
          dense
          v-model="form.username"
          type="text"
          label="Username"
          outlined
        />
        <q-input
          dense
          v-model="form.firstName"
          type="text"
          label="First Name"
          outlined
        />
        <q-input
          dense
          v-model="form.lastName"
          type="text"
          label="Last Name"
          outlined
        />
        <q-input
          dense
          v-model="form.password"
          type="password"
          label="Password"
          outlined
        />
        <div>
          <q-btn label="Update Profile" type="submit" color="dark" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';
import { useMainStore } from 'stores/mainStore';

const ClientProfileForm = defineComponent({
  name: 'ClientProfileForm',
  data() {
    return {
      form: {
        email: '',
        username: '',
        firstName: '',
        lastName: '',
      },
    };
  },
  computed: {
    ...mapState(useMainStore, ['clientDetails']),
  },
  mounted() {
    this.getClient();
    this.setDefaultValues();
  },
  methods: {
    ...mapActions(useMainStore, ['getClient']),
    setDefaultValues() {
      this.form.email = this.clientDetails.email;
      this.form.username = this.clientDetails.username;
      this.form.firstName = this.clientDetails.firstName;
      this.form.lastName = this.clientDetails.lastName;
    },
    handleSubmit() {
      // flow
      // update profile
      // go to store -> mainStore
      // create new action called update profile
      // payload
      // show loading, await response, check status code, return true of false,
      // wrap everything in try catch
      // hide loading in finally block
    },
  },
});
export default ClientProfileForm;
</script>

<style lang="scss">
.clientProfileForm {
  width: 500px;
}
</style>
