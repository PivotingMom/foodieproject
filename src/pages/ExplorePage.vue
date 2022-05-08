<template>
    <q-layout view="lHh Lpr lFf">
      <q-header class="chop__primary" elevated>
        <q-toolbar>
          <q-toolbar-title> Chops App </q-toolbar-title>
          <q-btn @click="goToLogin" label="Get Started" color="dark" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="column" padding>
          <h4>Your favourites tastes, delivered.</h4>
          <h5>Explore Restaurants</h5>
          <div class="row q-col-gutter-md">
            <div class="col-md-3" v-for="(item, index) in restaurants" :key="index">
          <q-card  bordered flat>
            <q-img height="200px" :src="item.imageUrl">
              <div class="absolute-bottom text-subtitle2 text-center">
                {{ item.name }} - {{ item.phoneNum }}
                <div class="q-mt-md">
                  <q-btn @click="goToMenu(item.restaurantId)" label="View Menu" color="dark" />
                </div>
              </div>
            </q-img>
          </q-card>
            </div>

          </div>
        </q-page>
      </q-page-container>
    </q-layout>

</template>

<script>
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useMainStore } from 'stores/mainStore';

const ExplorePage = defineComponent({
  name: 'ExplorePage',
  data() {
    return {
    };
  },
  computed: {
    ...mapState(useMainStore, ['restaurants']),
  },
  async mounted() {
    await this.getRestaurant();
  },
  methods: {
    ...mapActions(useMainStore, ['getRestaurant']),
    goToLogin() {
      this.$router.push({ name: 'auth' });
    },
    goToMenu(id) {
      this.$router.push({ name: 'view-menu', params: { id } });
    },
  },
});

export default ExplorePage;
</script>

<style lang="scss">
// .right-bg {
//   background-image: url("https://cdn.dribbble.com/users/283823/screenshots/10829285/media/8185d7546a272ed31b70bc7665498b0b.png");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// }
</style>
