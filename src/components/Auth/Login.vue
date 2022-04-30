<template>
  <div class="login">
    <h4>Login</h4>
    <q-card flat bordered>
      <q-card-section>
        <div class="q-mb-xl">
          Select Account Type?
          <q-radio v-model="accountType" val="restaurant" label="Restaurant" />
          <q-radio v-model="accountType" val="client" label="Client" />
        </div>
        <q-form @submit.prevent="onSubmit" class="q-gutter-md">
          <q-input dense v-model="email" type="email" label="Email" outlined />
          <q-input
            dense
            v-model="password"
            type="password"
            label="Password"
            outlined
          />
          <div>
            <q-btn
              label="Submit"
              class="full-width"
              type="submit"
              color="dark"
              :disable="!formIsValid"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
    <q-btn
      flat
      no-caps
      color="primary"
      label="I'm new here"
      @click="goToRegisterPage"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'pinia';
import { useMainStore } from 'stores/mainStore';

const LoginPage = defineComponent({
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      accountType: 'client',
    };
  },
  computed: {
    formIsValid() {
      return !!this.email && !!this.password && !!this.accountType;
    },
  },
  methods: {
    ...mapActions(useMainStore, ['login']),
    async onSubmit() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      const requestWasSuccessful = await this.login(payload, this.accountType);
      if (requestWasSuccessful === true) {
        this.$router.replace({ name: 'profile' });
      }
    },
    goToRegisterPage() {
      this.$emit('hide-login');
    },
  },
});
export default LoginPage;
</script>

<style lang="scss">
.login {
  width: 500px;
}
</style>
