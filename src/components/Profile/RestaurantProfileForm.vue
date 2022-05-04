<template>
  <q-card class="restaurantProfileForm">
    <q-card-section>
      <q-form @submit="handleSubmit" class="q-gutter-md">
        <q-input
          dense
          v-model="form.name"
          type="text"
          label="Name"
          outlined
        />
        <q-input
          dense
          v-model="form.address"
          type="text"
          label="Address"
          outlined
        />
        <q-input
          dense
          v-model="bannerUrl"
          type="text"
          label="Bannerurl"
          outlined
        />
        <q-input
          dense
          v-model="bio"
          type="text"
          label="Bio"
          outlined
        />
        <q-input
          dense
          v-model="form.cityName"
          type="text"
          label="City"
          outlined
        />
        <q-input
          dense
          v-model="form.email"
          type="text"
          label="Email"
          outlined
        />
        <q-input
          dense
          v-model="form.Phonenumber"
          type="text"
          label="Phone number"
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

const RestaurantProfileForm = defineComponent({
  name: 'RestaurantProfileForm',
  data() {
    return {
      form: {
        name: '',
        address: '',
        cityName: '',
        email: '',
        phoneNum: '',
      },
      optionalFields: {
        bannerUrl: '',
        bio: '',
        profileUrl: '',
      },
    };
  },
  computed: {
    ...mapState(useMainStore, ['restaurantDetails']),
  },
  mounted() {
    this.getRestaurant();
    this.setDefaultValues();
  },
  methods: {
    ...mapActions(useMainStore, ['getRestaurant']),
    setDefaultValues() {
      this.form.name = this.restaurantDetails.name;
      this.form.address = this.restaurantDetails.address;
      this.form.cityName = this.restaurantDetails.cityName;
      this.form.email = this.restaurantDetails.email;
      this.form.phoneNum = this.restaurantDetails.phoneNum;
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
export default RestaurantProfileForm;
</script>

<style lang="scss">
.clientProfileForm {
  width: 500px;
}
</style>
