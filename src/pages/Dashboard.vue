<template>
  <q-page class="flex flex-center column">
    <div v-if="clientDetails"

    class="text-h3 q-mb-md">
      Hi, {{ clientDetails.lastName }}👋
      Hi, {{ restaurantDetails.lastName }}👋

    </div>
    <ClientDashboardInfo />
    <RestaurantDashboardInfo/>
    <img
      alt="chop-app logo"
      src="https://media.istockphoto.com/vectors/order-grocery-online-vector-id1222105389?k=20&m=1222105389&s=612x612&w=0&h=BTcym-zKExEzoBh98z4Dmi5L-diDT6lUiSTQCacYigM="
    />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ClientDashboardInfo from 'components/Dashboard/ClientDashboardInfo.vue';
import RestaurantDashboardInfo from 'components/Dashboard/RestaurantDashboardInfo.vue';
import { mapActions, mapState } from 'pinia';
import { useMainStore } from 'stores/mainStore';

export default defineComponent({
  name: 'IndexPage',
  components: {
    ClientDashboardInfo,
    RestaurantDashboardInfo,
  },
  computed: {
    ...mapState(useMainStore, ['clientDetails']),
  },
  mounted() {
    this.getClient();
    this.getRestaurant();
    this.getOrders();
  },
  methods: {
    ...mapActions(useMainStore, ['getClient', 'getRestaurant', 'getOrders']),
  },
});
</script>
