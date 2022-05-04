<template>
  <q-card class="my-card">
    <q-card-section class="text-body1">
      <q-icon size="30px" name="shopping_cart" />
      You have {{ totalOrders }} Orders
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { useMainStore } from 'stores/mainStore';

const ClientDashboardInfo = defineComponent({
  name: 'ClientDashboardInfo',
  computed: {
    ...mapState(useMainStore, ['totalOrders']),
  },
});
export default ClientDashboardInfo;
</script>
