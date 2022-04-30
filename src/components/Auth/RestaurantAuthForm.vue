<template>
  <q-form @submit="onSubmit" class="q-gutter-md">
    <q-input dense outlined v-model="name" type="text" label="Restaurant's name" />
    <q-input dense outlined v-model="address" type="text" label="Restaurant's address" />
    <q-input
      outlined
      v-model="bannerUrl"
      dense
      type="url"
      label="BannerUrl"
    />
    <q-input dense outlined v-model="bio" type="text" label="Business tagline" />
    <q-input dense outlined v-model="cityName" type="text" label="City" />
    <q-input dense outlined v-model="email" type="text" label="Email" />
    <q-input dense outlined v-model="phoneNum" type="text" label="Phone Number" />
    <q-input dense outlined v-model="profileUrl" type="url" label="ProfileUrl" />

    <q-input
      dense
      outlined
      v-model="restaurantId"
      type="number"
      label="RestaurantId"
    />
    <div>
      <q-btn
        class="full-width"
        label="Create Account"
        type="submit"
        color="black"
        :disable="!restaurantFormIsValid"
      />
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from 'vue';

const RestaurantForm = defineComponent({
  name: 'RestaurantForm',
  data() {
    return {
      name: '',
      address: '',
      bannerUrl: '',
      bio: '',
      cityName: '',
      email: '',
      phoneNum: '',
      profileUrl: '',
      restaurantId: '',
    };
  },
  computed: {
    RestaurantFormIsValid() {
      if (
        this.name
        && this.address
        && this.bannerUrl
        && this.bio
        && this.cityName
        && this.email
        && this.phoneNum
        && this.profileUrl
        && this.restaurantId
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    onSubmit() {
      const payload = {
        name: this.name,
        address: this.address,
        bannerUrl: this.bannerUrl,
        bio: this.bio,
        cityName: this.cityName,
        email: this.email,
        phoneNum: this.phoneNum,
        profileUrl: this.profileUrl,
        restaurantId: this.restaurantId,
      };
      this.$emit('submitted', payload);
    },
  },
});
export default RestaurantForm;
</script>
