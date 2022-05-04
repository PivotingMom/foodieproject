<template>
  <q-card class="clientProfileForm">
    <div class="flex justify-center q-pt-md">
      <img :src="form.pictureUrl" alt="" class="avatar" width="200" />
    </div>
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
        <q-input
          dense
          v-model="form.pictureUrl"
          type="text"
          label="Picture URL"
          outlined
        />
        <div>
          <q-btn
            :disable="!formIsValid"
            label="Update Profile"
            type="submit"
            color="dark"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
/* eslint-disable operator-linebreak */
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
        password: '',
        pictureUrl: '',
      },
      optionalFields: ['pictureUrl', 'password'],
      accountType: null,
    };
  },
  computed: {
    ...mapState(useMainStore, ['clientDetails']),
    formIsValid() {
      return (
        !!this.form.email &&
        !!this.form.username &&
        !!this.form.firstName &&
        !!this.form.lastName
      );
    },
  },
  async mounted() {
    this.accountType = this.getAccountType();
    await this.getClient();
    this.setDefaultValues();
  },
  methods: {
    ...mapActions(useMainStore, [
      'getClient',
      'updateProfile',
      'getAccountType',
    ]),
    setDefaultValues() {
      this.form.email = this.clientDetails.email;
      this.form.username = this.clientDetails.username;
      this.form.firstName = this.clientDetails.firstName;
      this.form.lastName = this.clientDetails.lastName;
      this.form.pictureUrl = this.clientDetails.pictureUrl;
    },
    async handleSubmit() {
      const payload = this.form;
      Object.keys(payload).forEach((key) => {
        if (!payload[key] && this.optionalFields.includes(key)) {
          delete payload[key];
        }
      });
      await this.updateProfile(this.form, this.accountType);
    },
  },
});
export default ClientProfileForm;
</script>

<style lang="scss">
.clientProfileForm {
  width: 500px;
}
.avatar {
  border-radius: 5%;
}
</style>
