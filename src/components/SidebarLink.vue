<template>
  <q-item
    class="text-subtitle1"
    clickable
    @click="handleClicked"
    :to="{ name: to }"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SidebarLink',
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: 'auth',
    },
  },
  methods: {
    handleClicked() {
      this.$emit('clicked');
    },
  },
});
</script>
